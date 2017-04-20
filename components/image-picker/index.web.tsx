/* tslint:disable:no-bitwise */
import React from 'react';
import classNames from 'classnames';
import WingBlank from '../wing-blank';
import Flex from '../flex';
import Toast from '../toast';
import { ImagePickerPropTypes } from './PropsType';
import Touchable from 'rc-touchable';

const Item = Flex.Item;
function noop() { }

export default class ImagePicker extends React.Component<ImagePickerPropTypes, any> {
  static defaultProps = {
    prefixCls: 'am-image-picker',
    files: [],
    onChange: noop,
    onImageClick: noop,
    onAddImageClick: noop,
    selectable: true,
    maxWidth: 1024,
  };

  // http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
  getOrientation = (file, callback) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const view = new DataView((e.target as any).result);
      if (view.getUint16(0, false) !== 0xFFD8) {
        return callback(-2);
      }
      let length = view.byteLength;
      let offset = 2;
      while (offset < length) {
        const marker = view.getUint16(offset, false);
        offset += 2;
        if (marker === 0xFFE1) {
          let tmp = view.getUint32(offset += 2, false);
          if (tmp !== 0x45786966) {
            return callback(-1);
          }
          let little = view.getUint16(offset += 6, false) === 0x4949;
          offset += view.getUint32(offset + 4, little);
          let tags = view.getUint16(offset, little);
          offset += 2;
          for (let i = 0; i < tags; i++) {
            if (view.getUint16(offset + (i * 12), little) === 0x0112) {
              return callback(view.getUint16(offset + (i * 12) + 8, little));
            }
          }
        } else if ((marker & 0xFF00) !== 0xFF00) {
          break;
        } else {
          offset += view.getUint16(offset, false);
        }
      }
      return callback(-1);
    };
    reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
  }

  getRotation = (orientation = 1) => {
    let imgRotation = 0;
    switch (orientation) {
      case 3:
        imgRotation = 180;
        break;
      case 6:
        imgRotation = 90;
        break;
      case 8:
        imgRotation = 270;
        break;
      default:
    }
    return imgRotation;
  }

  removeImage = (index) => {
    const newImages: any[] = [];
    const { files = [] } = this.props;
    files.forEach((image, idx) => {
      if (index !== idx) {
        newImages.push(image);
      }
    });
    if (this.props.onChange) {
      this.props.onChange(newImages, 'remove', index);
    }
  }

  addImage = (imgItem) => {
    const { files = [] } = this.props;
    const newImages = files.concat(imgItem);
    if (this.props.onChange) {
      this.props.onChange(newImages, 'add');
    }
  }

  onImageClick = (index) => {
    if (this.props.onImageClick) {
      this.props.onImageClick(index, this.props.files);
    }
  }

  /**
    * Detecting vertical squash in loaded image.
    * Fixes a bug which squash image vertically while drawing into canvas for some images.
    * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
    * With react fix by n7best
    */
  detectVerticalSquash(img) {
    let data;
    let ih = img.naturalHeight;
    let canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = ih;
    let ctx = canvas.getContext('2d');
    if (!ctx) {
      return 1;
    }
    ctx.drawImage(img, 0, 0);
    try {
      // Prevent cross origin error
      data = ctx.getImageData(0, 0, 1, ih).data;
    } catch (err) {
      return 1;
    }
    // search image edge pixel position in case it is squashed vertically.
    let sy = 0;
    let ey = ih;
    let py = ih;
    while (py > sy) {
      let alpha = data[(py - 1) * 4 + 3];
      if (alpha === 0) {
        ey = py;
      } else {
        sy = py;
      }
      py = (ey + sy) >> 1;
    }
    let ratio = (py / ih);
    return (ratio === 0) ? 1 : ratio;
  }

  compressImage = (src, cb) => {
    let img = new Image();
    img.onload = () => {
      let w = Math.min(this.props.maxWidth, img.width);
      let h = img.height * (w / img.width);
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');

      if (ctx) {
        let drawImage = ctx.drawImage;
        ctx.drawImage = (_img: HTMLImageElement, sx, sy, sw, sh: number, dx, dy, dw, dh: number) => {
          let vertSquashRatio = 1;
          // Detect if img param is indeed image
          if (!!_img && _img.nodeName === 'IMG') {
            vertSquashRatio = this.detectVerticalSquash(_img);
            if (typeof sw === 'undefined') {
              sw = _img.naturalWidth;
            }
            if (typeof sh === 'undefined') {
              sh = _img.naturalHeight;
            }
          }
          // Execute several cases (Firefox does not handle undefined as no param)
          // by call (apply is bad performance)
          if (arguments.length === 9) {
            drawImage.call(ctx, _img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
          } else if (typeof sw !== 'undefined') {
            drawImage.call(ctx, _img, sx, sy, sw, sh / vertSquashRatio);
          } else {
            drawImage.call(ctx, _img, sx, sy);
          }
        };

        canvas.width = w;
        canvas.height = h;
        ctx.drawImage(img, 0, 0, w, h);
        // get image type
        let type = src.substring(src.indexOf(':') + 1, src.indexOf(';'));
        let base64Url = canvas.toDataURL(type);
        cb(base64Url);
      }
    };
    img.src = src;
  }

  onFileChange = () => {
    const fileSelectorEl = (this.refs as any).fileSelectorInput;
    if (fileSelectorEl.files && fileSelectorEl.files.length) {
      const file = fileSelectorEl.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataURL = (e.target as any).result;
        if (!dataURL) {
          Toast.fail('图片获取失败');
          return;
        }

        let orientation = 1;
        this.getOrientation(file, (res) => {
          // -2: not jpeg , -1: not defined
          if (res > 0) {
            orientation = res;
          }
          // compress image
          this.compressImage(dataURL, (url) => {
            this.addImage({
              url,
              orientation,
              file,
            });
          });

          fileSelectorEl.value = '';
        });
      };
      reader.readAsDataURL(file);
    }
  }

  render() {
    const { prefixCls, style, className, files = [],
      selectable, onAddImageClick } = this.props;
    const imgItemList: any[] = [];

    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className as string]: className,
    });

    files.forEach((image: any, index: number) => {
      const imgStyle = {
        backgroundImage: `url(${image.url})`,
        transform: `rotate(${this.getRotation(image.orientation)}deg)`,
      };
      imgItemList.push(
        <Item>
          <div key={index} className={`${prefixCls}-item`} >
            <div
              className={`${prefixCls}-item-remove`}
              onClick={() => { this.removeImage(index); }}
            />
            <div
              className={`${prefixCls}-item-content`}
              onClick={() => { this.onImageClick(index); }}
              style={imgStyle}
            />
          </div>
        </Item>,
      );
    });

    const selectEl = (
      <Touchable activeClassName={`${prefixCls}-upload-btn-active`}>
        <Item>
          <div
            className={`${prefixCls}-item ${prefixCls}-upload-btn`}
            onClick={onAddImageClick}
          >
            <input
              ref="fileSelectorInput"
              type="file"
              accept="image/jpg,image/jpeg,image/png,image/gif"
              onChange={() => { this.onFileChange(); }}
            />
          </div>
        </Item>
      </Touchable>
    );

    let allEl = selectable ? imgItemList.concat([selectEl]) : imgItemList;
    const length = allEl.length;
    if (length !== 0 && length % 4 !== 0) {
      const fillBlankEl = new Array(4 - length % 4).fill(<Item />);
      allEl = allEl.concat(fillBlankEl);
    }
    const flexEl: Array<Array<any>> = [];
    for (let i = 0; i < allEl.length / 4; i++) {
      const rowEl = allEl.slice(i * 4, i * 4 + 4);
      flexEl.push(rowEl);
    }
    const renderEl = flexEl.map((item) => (
      <Flex>
        {item}
      </Flex>
    ));
    return (
      <div className={wrapCls} style={style}>
        <div className={`${prefixCls}-list`}>
          <WingBlank size="md">
            {renderEl}
          </WingBlank>
        </div>
      </div>
    );
  }
}
