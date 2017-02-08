---
order: 0
title: 简单的图片选择组件
---

````__react
import { ImagePicker } from 'antd-mobile';

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];

const ImagePickerExample = React.createClass({
  getInitialState() {
    return {
      files: data,
    };
  },
  onChange(files, type, index) {
    console.log(files, type, index);
    this.setState({
      files,
    });
  },
  render() {
    const { files } = this.state;
    return (
      <div>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 5}
        />
      </div>
    );
  },
});

ReactDOM.render(<ImagePickerExample />, mountNode);
````
