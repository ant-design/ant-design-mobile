/* tslint:disable:no-bitwise */
import React from 'react';
import classNames from 'classnames';
import WingBlank from '../wing-blank';
import Flex from '../flex';
import Toast from '../toast';
import { ImagePickerPropTypes } from './PropsType';
import TouchFeedback from 'rmc-feedback';

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
  };

  fileSelectorInput: any;

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

  onFileChange = () => {
    const fileSelectorEl = this.fileSelectorInput;
    if (fileSelectorEl && fileSelectorEl.files && fileSelectorEl.files.length) {
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
          this.addImage({
            url: dataURL,
            orientation,
            file,
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
        <Item key={`item-${index}`}>
          <div key={index} className={`${prefixCls}-item`} >
            <div
              className={`${prefixCls}-item-remove`}
              role="button"
              aria-label="Click and Remove this image"
              onClick={() => { this.removeImage(index); }}
            />
            <div
              className={`${prefixCls}-item-content`}
              role="button"
              aria-label="Image can be clicked"
              onClick={() => { this.onImageClick(index); }}
              style={imgStyle}
            />
          </div>
        </Item>,
      );
    });

    const selectEl = (
      <Item key="select">
        <TouchFeedback activeClassName={`${prefixCls}-upload-btn-active`}>
          <div
            className={`${prefixCls}-item ${prefixCls}-upload-btn`}
            onClick={onAddImageClick}
            role="button"
            aria-label="Choose and add image"
          >
            <input
              ref={(input) => { this.fileSelectorInput = input; }}
              type="file"
              accept="image/jpg,image/jpeg,image/png,image/gif"
              onChange={() => { this.onFileChange(); }}
            />
          </div>
        </TouchFeedback>
      </Item>
    );

    let allEl = selectable ? imgItemList.concat([selectEl]) : imgItemList;
    const length = allEl.length;
    if (length !== 0 && length % 4 !== 0) {
      const blankCount = 4 - length % 4;
      let fillBlankEl: Array<any> = [];
      for (let i = 0; i < blankCount; i++) {
        fillBlankEl.push(<Item key={`blank-${i}`}/>);
      }
      allEl = allEl.concat(fillBlankEl);
    }
    const flexEl: Array<Array<any>> = [];
    for (let i = 0; i < allEl.length / 4; i++) {
      const rowEl = allEl.slice(i * 4, i * 4 + 4);
      flexEl.push(rowEl);
    }
    const renderEl = flexEl.map((item, index) => (
      <Flex key={`flex-${index}`}>
        {item}
      </Flex>
    ));
    return (
      <div className={wrapCls} style={style}>
        <div className={`${prefixCls}-list`} role="group">
          <WingBlank size="md">
            {renderEl}
          </WingBlank>
        </div>
      </div>
    );
  }
}
