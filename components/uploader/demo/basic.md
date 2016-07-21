---
order: 0
title: 图片上传
-----------

简单的图片上传组件
---------

````jsx
import { Uploader, WhiteSpace } from 'antm';

const UploaderExample = React.createClass({
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
        <Uploader
          onChange={(files) => {
            console.log(files);
            this.setState({
              files,
            });
          }}
          files={this.state.files}
        />
        <WhiteSpace />
        <Uploader
          onChange={(files2) => {
            console.log(files2);
            this.setState({
              files2,
            });
          }}
          maxUpload={4}
          files={this.state.files2}
        />
      </div>
    );
  },
});

ReactDOM.render(<UploaderExample />, mountNode);
````
