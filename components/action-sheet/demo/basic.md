---
order: 0
title: 基本
---


````jsx
import { ActionSheet, Button, Toast } from 'antd-mobile';

const Test = React.createClass({
  getInitialState() {
    return {
      clicked: 'none',
      clicked1: 'none',
      clicked2: 'none',
    };
  },
  showActionSheet() {
    const BUTTONS = ['操作 0', '操作 1', '操作 2', '删除', '取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      // title: '标题',
      message: '我是描述我是描述',
      maskClosable: true,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  },
  icons: [
    { iconName: 'mail', title: '发邮件' },
    { iconName: 'message', title: '发短信' },
    { iconName: 'team', title: '发送到群' },
    { iconName: 'download', title: '下载' },
    { iconName: 'delete', title: '删除' },
    { iconName: 'ellipsis', title: '更多' },
  ],
  showShareActionSheet() {
    const icons = this.icons;
    ActionSheet.showShareActionSheetWithOptions({
      options: icons,
      title: '标题',
      message: '我是描述我是描述',
    },
    (buttonIndex) => {
      this.setState({ clicked1: buttonIndex > -1 ? icons[buttonIndex].title : 'cancel' });
      // also support Promise
      return new Promise((resolve) => {
        Toast.info('1000ms 后关闭');
        setTimeout(resolve, 1000);
      });
    });
  },
  showShareActionSheetMulpitleLine() {
    const icons = [[...this.icons], [...this.icons]];
    ActionSheet.showShareActionSheetWithOptions({
      options: icons,
      title: '标题',
      message: '我是描述我是描述',
    },
    (buttonIndex, rowIndex) => {
      this.setState({ clicked2: buttonIndex > -1 ? icons[rowIndex][buttonIndex].title : 'cancel' });
    });
  },
  render() {
    return (<div style={{ margin: '0 8px' }}>
      <div style={{ margin: '32px 0' }}>
        {/* <p className="demo-p">默认状态操作列表</p> */}
        <div style={{ padding: '8px 0' }}>
          <Button type="primary" onClick={this.showActionSheet}>默认状态操作列表</Button>
        </div>
        {/*
        <p className="demo-p">点击过的按钮: &nbsp;
          <span style={{ color: '#222' }}>{this.state.clicked}</span>
        </p>
        */}
      </div>

      <div style={{ margin: '32px 0' }}>
        <div style={{ padding: '8px 0' }}>
          <Button type="primary" onClick={this.showShareActionSheet}>带分享功能的操作列表</Button>
        </div>
      </div>
      <div style={{ margin: '32px 0' }}>
        <div style={{ padding: '8px 0' }}>
          <Button type="primary" onClick={this.showShareActionSheetMulpitleLine}>带多行按钮的分享功能操作列表</Button>
        </div>
      </div>
    </div>);
  },
});

ReactDOM.render(<Test />, mountNode);
````
