---
order: 0
title: 简单的图片选择组件
---

````__react
import { ImagePicker, Button, Tabs } from 'antd-mobile';

const TabPane = Tabs.TabPane;

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
      files1: data,
      files2: data
    };
  },
  onChange1(files1, type, index) {
    console.log(files1, type, index);
    this.setState({
      files1,
    });
  },
  onChange2(files2, type, index) {
    console.log(files2, type, index);
    this.setState({
      files2,
    });
  },
  onAddImageClick(e) {
    e.preventDefault();
    this.setState({
      files2: this.state.files2.concat({
        url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
        id: '3',
      }),
    });
  },
  onTabChange(key) {
    console.log(key);
  },
  render() {
    const { files1, files2 } = this.state;
    return (<div>
        <Tabs defaultActiveKey="1" onChange={this.onTabChange}>
          <TabPane tab="默认选择图片方法" key="1">
            <ImagePicker
              files={files1}
              onChange={this.onChange1}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={files1.length < 5}
            />
          </TabPane>
          <TabPane tab="自定义选择图片的方法" key="2">
            <ImagePicker
              files={files2}
              onChange={this.onChange2}
              onImageClick={(index, fs) => console.log(index, fs)}
              onAddImageClick={this.onAddImageClick}
              selectable={files2.length < 5}
            />
          </TabPane>
        </Tabs>
    </div>);
  },
});

ReactDOM.render(<ImagePickerExample />, mountNode);
````
