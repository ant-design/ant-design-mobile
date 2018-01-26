---
order: 3
title:
  zh-CN: 自定义显示网格，参考微信九宫格
  en-US: 'Cutom file grids'
---

````jsx
import { ImagePicker } from 'antd-mobile';

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];

class ImagePickerExample extends React.Component {
  state = {
    files: data,
  }
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }

  render() {
    const { files } = this.state;
    return (
      <div>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 9}
          accept="image/gif,image/jpeg,image/jpg,image/png"
          grids={3}
          square
        />
      </div>
    );
  }
}

ReactDOM.render(<ImagePickerExample />, mountNode);
````
