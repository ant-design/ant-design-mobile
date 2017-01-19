---
order: 0
title: 基本用法示例
---


````__react
/* eslint global-require: 0 */
import { ActionSheet, Button, Toast, Icon } from 'antd-mobile';

// fix touch to scroll background page on iOS
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

const Test = React.createClass({
  getInitialState() {
    return {
      clicked: 'none',
      clicked1: 'none',
      clicked2: 'none',
    };
  },
  showActionSheet() {
    const BUTTONS = ['操作一', '操作二', '操作三', '删除', '取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      // title: '标题',
      message: '我是描述我是描述',
      maskClosable: true,
      'data-seed': 'logId',
      wrapProps,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  },
  icons: [
    { icon: <img src="https://zos.alipayobjects.com/rmsportal/WmEzpOsElbbvgmrexFSH.png" />, title: '发送给朋友' },
    { icon: <img src="https://zos.alipayobjects.com/rmsportal/HssPJKvrjEByyVWJIFwl.png" />, title: '新浪微博' },
    { icon: <img src="https://zos.alipayobjects.com/rmsportal/HCGowLrLFMFglxRAKjWd.png" />, title: '生活圈' },
    { icon: <img src="https://zos.alipayobjects.com/rmsportal/LeZNKxCTkLHDWsjFfqqn.png" />, title: '微信好友' },
    { icon: <img src="https://zos.alipayobjects.com/rmsportal/YHHFcpGxlvQIqCAvZdbw.png" />, title: 'QQ' },
    { icon: <Icon type={require('./refresh.svg')} />, title: '刷新' },
    { icon: <Icon type={require('./link.svg')} />, title: '链接' },
    { icon: <Icon type={require('./complaints.svg')} />, title: '投诉' },
  ],
  showShareActionSheet() {
    const icons = [...this.icons];
    icons.length = 4;
    ActionSheet.showShareActionSheetWithOptions({
      options: icons,
      // title: '标题',
      message: '我是描述我是描述',
      className: 'my-action-sheet',
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
    const icons = [[...this.icons], [this.icons[5], this.icons[6], this.icons[7]]];
    ActionSheet.showShareActionSheetWithOptions({
      options: icons,
      // title: '标题',
      message: '我是描述我是描述',
      className: 'my-action-sheet',
    },
    (buttonIndex, rowIndex) => {
      this.setState({ clicked2: buttonIndex > -1 ? icons[rowIndex][buttonIndex].title : 'cancel' });
    });
  },
  render() {
    return (<div style={{ margin: '0 0.15rem' }}>
      <div style={{ margin: '0.15rem 0' }}>
        <Button onClick={this.showActionSheet}>默认状态</Button>
      </div>
      <div style={{ margin: '0.15rem 0' }}>
        <Button onClick={this.showShareActionSheet}>分享功能</Button>
      </div>
      <div style={{ margin: '0.15rem 0' }}>
        <Button onClick={this.showShareActionSheetMulpitleLine}>带多行按钮的分享功能</Button>
      </div>
    </div>);
  },
});

ReactDOM.render(<Test />, mountNode);
````
````css
.my-action-sheet .am-action-sheet-share-list-item-icon img {
  width: 0.72rem;
}
````
