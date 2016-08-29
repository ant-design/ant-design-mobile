---
order: 0
title: 图片选择
-----------

简单的图片选择组件
---------

````jsx
import { ImagePicker, WhiteSpace } from 'antd-mobile';

const ImagePickerExample = React.createClass({
  getInitialState() {
    return {
      files: [{
        url: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
        id: '2121',
      }, {
        url: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
        id: '2122',
      }, {
        url: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
        id: '2123',
      }, {
        url: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
        id: '2124',
      }, {
        url: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
        id: '2125',
      }, {
        url: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
        id: '2126',
      }],
      files2: [],
    };
  },
  render() {
    return (
      <div>
        <ImagePicker
          onChange={(files, type, index) => {
            console.log(files);
            console.log(type);
            console.log(index);
            this.setState({
              files,
            });
          }}
          files={this.state.files}
        />
        <WhiteSpace />
        <ImagePicker
          onChange={(files2, type, index) => {
            console.log(files2);
            console.log(type);
            console.log(index);
            this.setState({
              files2,
            });
          }}
          files={this.state.files2}
        />
      </div>
    );
  },
});

ReactDOM.render(<ImagePickerExample />, mountNode);
````
