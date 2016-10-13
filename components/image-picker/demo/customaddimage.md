---
order: 0
title: 自定义图片选择的方法
-----------

````jsx
import { ImagePicker } from 'antd-mobile';

const ImagePickerExample = React.createClass({
  getInitialState() {
    return {
      files: [{
        url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
        id: '2121',
      }, {
        url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
        id: '2122',
      }],
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
          onImageClick={(index, files) => {
            console.log(index);
            console.log(files);
          }}
          files={this.state.files}
          onAddImageClick={() => {
            alert(111);
            this.setState({
              files: this.state.files.concat({
                url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
                id: '3',
              }),
            });
          }}
        />
      </div>
    );
  },
});

ReactDOM.render(<ImagePickerExample />, mountNode);
````
