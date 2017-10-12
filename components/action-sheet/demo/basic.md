---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---


````jsx
import { ActionSheet, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';

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

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: 'none',
      clicked1: 'none',
      clicked2: 'none',
    };
  }

  iconList = [
    { icon: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
    { icon: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
    { icon: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
    { icon: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
    { icon: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
  ].map(obj => ({
    icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.icon}.png`} alt={obj.title} style={{ width: 36 }} />,
    title: obj.title,
  }));

  showActionSheet = () => {
    const BUTTONS = ['Operation1', 'Operation2', 'Operation2', 'Delete', 'Cancel'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      // title: 'title',
      message: 'I am description, description, description',
      maskClosable: true,
      'data-seed': 'logId',
      wrapProps,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  }

  showShareActionSheet = () => {
    const icons = [...this.iconList];
    icons.length = 4;
    ActionSheet.showShareActionSheetWithOptions({
      options: icons,
      // title: 'title',
      message: 'I am description, description, description',
    },
    (buttonIndex) => {
      this.setState({ clicked1: buttonIndex > -1 ? icons[buttonIndex].title : 'cancel' });
      // also support Promise
      return new Promise((resolve) => {
        Toast.info('closed after 1000ms');
        setTimeout(resolve, 1000);
      });
    });
  }

  showShareActionSheetMulpitleLine = () => {
    const icons = [[...this.iconList, this.iconList[2]], [this.iconList[3], this.iconList[4]]];
    ActionSheet.showShareActionSheetWithOptions({
      options: icons,
      message: 'I am description, description, description',
    },
    (buttonIndex, rowIndex) => {
      this.setState({ clicked2: buttonIndex > -1 ? icons[rowIndex][buttonIndex].title : 'cancel' });
    });
  }

  render() {
    return (<WingBlank>
      <Button onClick={this.showActionSheet}>showActionSheet</Button>
      <WhiteSpace />
      <Button onClick={this.showShareActionSheet}>showShareActionSheet</Button>
      <WhiteSpace />
      <Button onClick={this.showShareActionSheetMulpitleLine}>showShareActionSheetMulpitleLine</Button>
    </WingBlank>);
  }
}

ReactDOM.render(<Test />, mountNode);
````
