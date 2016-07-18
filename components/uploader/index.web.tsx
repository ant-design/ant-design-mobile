/* tslint:disable:no-bitwise */
import * as React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';
import WingBlank from '../wing-blank';
import Flex from '../flex';
import Toast from '../toast';
function noop() { }

export interface UploaderProps {
  prefixCls?: string;
  style?: React.CSSProperties;
  files?: Array<{}>;
  onChange?: Function;
}

export default class Uploader extends React.Component<UploaderProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    files: PropTypes.array,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-uploader',
    files: [],
    onChange: noop,
  };

  // http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
  getOrientation = (file, callback) => {
    if (!(/iphone|ipad/i).test(navigator.userAgent)) {
      callback('-1');
    } else {
      const reader = new FileReader();
      reader.onload = (e) => {
        const view = new DataView(e.target.result);
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
  };

  removeImage = (index) => {
    const newImages = [];
    this.props.files.forEach((image, idx) => {
      if (index !== idx) {
        newImages.push(image);
      }
    });
    this.props.onChange(newImages);
  };

  addImage = (imgItem) => {
    const newImages = this.props.files.concat(imgItem);
    this.props.onChange(newImages);
  };

  onFileChange = () => {
    const fileSelectorEl = this.refs.fileSelectorInput;
    if (fileSelectorEl.files && fileSelectorEl.files.length) {
      const file = fileSelectorEl.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataURL = e.target.result;
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
          });
        });
      };
      reader.readAsDataURL(file);
    }
  };

  render() {
    const { prefixCls, style, className, files } = this.props;
    const imgItemList = [];
    const customWidth = ((document.documentElement.clientWidth - 32 - 24) / 4);

    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className]: className,
    });

    const itemStyle = {
      width: `${customWidth}px`,
      height: `${customWidth}px`,
    };
    const inputWrapStyle = {
      width: `${customWidth - 2}px`,
      height: `${customWidth - 2}px`,
    };
    files.forEach((image, index) => {
      imgItemList.push(
        <div key={index} className={`${prefixCls}-item`} style={itemStyle}>
          <div className={`${prefixCls}-item-remove`} onClick={this.removeImage.bind(this, index)} />
          <div className={`${prefixCls}-item-content`} style={{ backgroundImage: `url(${image.url})` }} />
        </div>
      );
    });

    return (
      <div className={wrapCls} style={style}>
        <div className={`${prefixCls}-list`}>
          <WingBlank mode={16}>
            <Flex wrap="wrap">
              {imgItemList}
              <div className={`${prefixCls}-item ${prefixCls}-upload-btn`} style={inputWrapStyle}>
                <input
                  style={itemStyle}
                  ref="fileSelectorInput"
                  type="file"
                  accept="image/jpg,image/jpeg,image/png,image/gif"
                  onChange={this.onFileChange}
                />
              </div>
            </Flex>
          </WingBlank>
        </div>
      </div>
    );
  }
}
