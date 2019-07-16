/* tslint:disable:no-bitwise */
import classnames from 'classnames';
import * as React from 'react';
import TouchFeedback from 'rmc-feedback';
import Flex from '../flex';
import { ImagePickerPropTypes as BasePropsType } from './PropsType';

export interface ImagePickerPropTypes extends BasePropsType {
  prefixCls?: string;
  className?: string;
}

function noop() {}

export default class ImagePicker extends React.Component<
  ImagePickerPropTypes,
  any
> {
  static defaultProps = {
    prefixCls: 'am-image-picker',
    files: [],
    onChange: noop,
    onImageClick: noop,
    onAddImageClick: noop,
    onFail: noop,
    selectable: true,
    multiple: false,
    accept: 'image/*',
    length: 4,
    disableDelete: false,
  };

  fileSelectorInput: HTMLInputElement | null;

  // http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
  getOrientation = (file: any, callback: (_: number) => void) => {
    const reader = new FileReader();
    reader.onload = e => {
      const view = new DataView((e.target as any).result);
      if (view.getUint16(0, false) !== 0xffd8) {
        return callback(-2);
      }
      const length = view.byteLength;
      let offset = 2;
      while (offset < length) {
        const marker = view.getUint16(offset, false);
        offset += 2;
        if (marker === 0xffe1) {
          const tmp = view.getUint32((offset += 2), false);
          if (tmp !== 0x45786966) {
            return callback(-1);
          }
          const little = view.getUint16((offset += 6), false) === 0x4949;
          offset += view.getUint32(offset + 4, little);
          const tags = view.getUint16(offset, little);
          offset += 2;
          for (let i = 0; i < tags; i++) {
            if (view.getUint16(offset + i * 12, little) === 0x0112) {
              return callback(view.getUint16(offset + i * 12 + 8, little));
            }
          }
        } else if ((marker & 0xff00) !== 0xff00) {
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

  removeImage = (index: number) => {
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

  addImage = (imgItem: any) => {
    const { files = [] } = this.props;
    const newImages = files.concat(imgItem);
    if (this.props.onChange) {
      this.props.onChange(newImages, 'add');
    }
  }

  onImageClick = (index: number) => {
    if (this.props.onImageClick) {
      this.props.onImageClick(index, this.props.files);
    }
  }

  onFileChange = () => {
    const fileSelectorEl = this.fileSelectorInput;
    if (fileSelectorEl && fileSelectorEl.files && fileSelectorEl.files.length) {
      const files = fileSelectorEl.files;
      const imageParsePromiseList = []
      for (let i = 0; i < files.length; i++) {
        imageParsePromiseList.push(this.parseFile(files[i], i))
      }
      Promise.all(imageParsePromiseList)
        .then(imageItems => this.addImage(imageItems))
        .catch(
          error => {
            if (this.props.onFail) {
              this.props.onFail(error);
            }
          },
        )
    }
    if (fileSelectorEl) {
      fileSelectorEl.value = '';
    }
  }

  parseFile = (file: any, index: number) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = e => {
        const dataURL = (e.target as any).result;
        if (!dataURL) {
          reject(`Fail to get the ${index} image`)
          return;
        }

        let orientation = 1;
        this.getOrientation(file, res => {
          // -2: not jpeg , -1: not defined
          if (res > 0) {
            orientation = res;
          }
          resolve({
            url: dataURL,
            orientation,
            file,
          })
        });
      };
      reader.readAsDataURL(file);
    })
  }
  render() {
    const {
      prefixCls,
      style,
      className,
      files = [],
      selectable,
      onAddImageClick,
      multiple,
      accept,
      capture,
      disableDelete,
    } = this.props;

    const imgItemList: any[] = [];
    let count = parseInt('' + this.props.length, 10);
    if (count <= 0) {
      count = 4;
    }

    const wrapCls = classnames(`${prefixCls}`, className);

    files.forEach((image: any, index: number) => {
      const imgStyle = {
        backgroundImage: `url("${image.url}")`,
        transform: `rotate(${this.getRotation(image.orientation)}deg)`,
      };
      const itemStyle = {};

      imgItemList.push(
        <Flex.Item
          key={`item-${index}`}
          style={itemStyle}
        >
          <div key={index} className={`${prefixCls}-item`}>
            { !disableDelete && <div
              className={`${prefixCls}-item-remove`}
              role="button"
              aria-label="Click and Remove this image"
              // tslint:disable-next-line:jsx-no-multiline-js
              onClick={() => {
                this.removeImage(index);
              }}
            />}
            <div
              className={`${prefixCls}-item-content`}
              role="button"
              aria-label="Image can be clicked"
              // tslint:disable-next-line:jsx-no-multiline-js
              onClick={() => {
                this.onImageClick(index);
              }}
              style={imgStyle}
            />
          </div>
        </Flex.Item>,
      );
    });

    const selectEl = (
      <Flex.Item key="select">
        <TouchFeedback activeClassName={`${prefixCls}-upload-btn-active`}>
          <div
            className={`${prefixCls}-item ${prefixCls}-upload-btn`}
            onClick={onAddImageClick}
            role="button"
            aria-label="Choose and add image"
          >
            <input
              ref={(input) => { if (input) { this.fileSelectorInput = input; } }}
              type="file"
              accept={accept}
              // tslint:disable-next-line:jsx-no-multiline-js
              onChange={() => {
                this.onFileChange();
              }}
              multiple={multiple}
              capture={capture}
            />
          </div>
        </TouchFeedback>
      </Flex.Item>
    );

    let allEl = selectable ? imgItemList.concat([selectEl]) : imgItemList;
    const length = allEl.length;
    if (length !== 0 && length % count !== 0) {
      const blankCount = count - length % count;
      const fillBlankEl: any[] = [];
      for (let i = 0; i < blankCount; i++) {
        fillBlankEl.push(<Flex.Item key={`blank-${i}`} />);
      }
      allEl = allEl.concat(fillBlankEl);
    }
    const flexEl: any[][] = [];
    for (let i = 0; i < allEl.length / count; i++) {
      const rowEl = allEl.slice(i * count, i * count + count);
      flexEl.push(rowEl);
    }
    const renderEl = flexEl.map((item, index) => (
      <Flex key={`flex-${index}`}>{item}</Flex>
    ));

    return (
      <div className={wrapCls} style={style}>
        <div className={`${prefixCls}-list`} role="group">
          {renderEl}
        </div>
      </div>
    );
  }
}
