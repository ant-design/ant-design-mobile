import React, { PropTypes } from 'react';
import classNames from 'classnames';
import WingBlank from '../wing-blank';
import WhiteSpace from '../white-space';
import Flex from '../flex';
function noop() { }

export default class Uploader extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    value: PropTypes.array,
    onChange: PropTypes.func,
    children: PropTypes.node,
    maxUpload : PropTypes.number,
    minUpload : PropTypes.number,
    uploadTip: PropTypes.string,
    sampleTip: PropTypes.string,
    unselectedTip: PropTypes.string,
    title: PropTypes.string,
    sampleImage: PropTypes.string
  };

  static defaultProps = {
    prefixCls: 'am-uploader',
    value: [],
    onChange: noop,
    maxUpload: 10,
    minUpload: 1,
    sampleImage: '',
    uploadTip: '',
    unselectedTip: '请上传',
    title: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      images: this.props.value,
      uploading: false,
      errorTip: ''
    };
  }

  removeImage = (id) => {
    const imageToRender = [];
    this.state.images.forEach((image) => {
      if (image.id && image.id !== id) {
        imageToRender.push(image);
      }
    });
    this.setState({
      images: imageToRender,
    });
  };

  onChange = () => {
    this.props.onChange(value);
  };

  // http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
  getOrientation = (file, callback) => {
    if (!(/iphone|ipad/i).test(navigator.userAgent)){
      callback('-1');
    } else {
      const reader = new FileReader();
      reader.onload = function(e){
        const view = new DataView(e.target.result);
        if (view.getUint16(0, false) !== 0xFFD8) return callback(-2);
        let length = view.byteLength;
        let offset = 2;
        while (offset < length) {
          const marker = view.getUint16(offset, false);
          offset += 2;
          if (marker === 0xFFE1) {
            let tmp = view.getUint32(offset += 2, false);
            if (tmp !== 0x45786966){
              return callback(-1);
            }
            let little = view.getUint16(offset += 6, false) === 0x4949;
            offset += view.getUint32(offset + 4, little);
            let tags = view.getUint16(offset, little);
            offset += 2;
            for (let i = 0; i < tags; i++){
              if (view.getUint16(offset + (i * 12), little) === 0x0112){
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

  appendPhotoItem = (imgItem) => {
    const newImages = this.state.images.concat(imgItem);
    this.setState({
      images: newImages,
      errorTip: ''
    });
  };

  fileSelectorChanged = (fileEvent) => {
    const fileSelectorEl = this.refs.fileSelectorInput;
    if (fileSelectorEl.files && fileSelectorEl.files.length){
      const file = fileSelectorEl.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataURL = e.target.result;
        if (!dataURL){
          Bridge.toast({
            content: '图片获取失败'
          });
          return;
        }

        let orientation = 1;
        this.getOrientation(file, (res) => {
          console.log('orientation :' + res);
          // -2: not jpeg , -1: not defined
          if (res > 0){
            orientation = res;
          }

          this.setState({
            uploading: true
          });
          this.appendPhotoItem({
            url: dataURL,
            id: 'cc' + Math.random()
          });
          debugger;
         /* uploadPhoto({
            type: this.props.imgType,
            dataURL,
            orientation
          }, (err, photoItem) => {
            this.setState({
              uploading: false
            }, () => {
              if (!err && photoItem){
                // console.log(photoItem);
                this.appendPhotoItem(photoItem);
              } else {
                err = err || {};
                Bridge.toast({
                  content: err.resultMsg || '上传失败，可能是图片太大'
                });
              }
            });
          });*/
        });
      };
      reader.readAsDataURL(file);
    }
  };

  render() {
    const { prefixCls, style, className, sampleImage, sampleTip, uploadTip, maxUpload } = this.props;
    const { errorTip, images } = this.state;
    const customWidth = ((document.documentElement.clientWidth - 32 - 24) / 4);
    const itemStyle = {
      width: customWidth + 'px',
      height: customWidth + 'px',
    };
    const inputWrapStyle = {
      width: (customWidth - 2) + 'px',
      height: (customWidth - 2) + 'px',
    };

    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className]: className
    });

    let uploadTipEl = null;
    let uploadItem;
    const imgItemList = [];
    const isAlipay = /alipay/i.test(navigator.userAgent);

    images.forEach((image) => {
      // alert(image.url.replace(/&amp;/g, '&').replace('zoom=original', 'zoom=200x200'));
      imgItemList.push(
        <div key={image.id} className="imgItem" style={itemStyle}>
          <div className="check-icon" onClick={this.removeImage.bind(this, image.id)}></div>
          <div className="imgContent" style={{ backgroundImage: 'url(' + image.url + ')' }} />
        </div>
      );
    });

    if (images.length < maxUpload) {
      if (isAlipay){
        uploadItem = (
          <div className="imgItem imgItemBtn" onClick={this.selectPhoto} style={inputWrapStyle} />
        );
      } else {
        /*if (dd && dd.biz.util.fetchImageData !== undefined) {
         uploadItem = (
         <div className="imgItem imgItemBtn" onClick={this.selectPhotoByDD}>
         <img src="https://t.alipayobjects.com/tfscom/T1tRxfXnxoXXXXXXXX.png" />
         </div>
         );
         <div className="uploaderBtnWrapper" />
         } else {*/
        uploadItem = (
          <div className="imgItem uploaderBtnWrapper" style={inputWrapStyle}>
            <input  style={itemStyle} ref="fileSelectorInput" type="file" name="photo" onChange={this.fileSelectorChanged} />
          </div>
        );
        /*
         }
         */
      }
    }

    if (errorTip){
      uploadTipEl = (
        <WingBlank>
          <h6 className="uploadTip uploadTipError">{this.state.errorTip}</h6>
        </WingBlank>
      );
    } else if (uploadTip){
      uploadTipEl = (
        <WingBlank>
          <h6 className="uploadTip">{this.props.uploadTip}</h6>
        </WingBlank>
      );
    }
    return (
      <div className={wrapCls} style={style}>
        {sampleImage !== '' ? (
          <div className="photoSection sampleSection">
            <img src={sampleImage} />
          </div>
        ) : null}
        {sampleTip !== '' ? (<WingBlank>
          <h6 className="uploadTip">{sampleTip}</h6>
        </WingBlank>) : null }
        <div className={`${prefixCls}-list`}>
          <WingBlank mode={16}>
            <Flex wrap="wrap">
              {imgItemList}
              {uploadItem}
            </Flex>
          </WingBlank>
          <WhiteSpace />
          <div className="photoSubTitle">
            <span className="uploadCounter"> {this.state.images.length} / {this.props.maxUpload} </span>
          </div>
        </div>
        {uploadTipEl}
      </div>
    );
  }
}
