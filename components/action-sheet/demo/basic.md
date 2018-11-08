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

  dataList = [
    { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
    { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
    { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
    { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
    { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
  ].map(obj => ({
    icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
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
    ActionSheet.showShareActionSheetWithOptions({
      options: this.dataList,
      // title: 'title',
      message: 'I am description, description, description',
    },
    (buttonIndex) => {
      this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
      // also support Promise
      return new Promise((resolve) => {
        Toast.info('closed after 1000ms');
        setTimeout(resolve, 1000);
      });
    });
  }

  showShareActionSheetMulpitleLine = () => {
    const data = [[...this.dataList, this.dataList[2]], [this.dataList[3], this.dataList[4]]];
    ActionSheet.showShareActionSheetWithOptions({
      options: data,
      message: 'I am description, description, description',
    },
    (buttonIndex, rowIndex) => {
      this.setState({ clicked2: buttonIndex > -1 ? data[rowIndex][buttonIndex].title : 'cancel' });
    });
  }

  showActionSheetBadge = () => {
    const BUTTONS = ['Operation1', 'Operation2', 'Operation3', 'Operation4', 'Operation5', 'Delete', 'Cancel'];
    const BADGES = [{
      index: 1,
      dot: true,
    }, {
      index: 2,
      text: 3100,
    }, {
      index: 3,
      text: '推荐',
    }, {
      index: 4,
      text: '···',
    }];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      badges: BADGES,
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

  render() {
    return (<WingBlank>
      <Button onClick={this.showActionSheet}>showActionSheet</Button>
      <WhiteSpace />
      <Button onClick={this.showActionSheetBadge}>showActionSheet&Badge</Button>
      <WhiteSpace />
      <Button onClick={this.showShareActionSheet}>showShareActionSheet</Button>
      <WhiteSpace />
      <Button onClick={this.showShareActionSheetMulpitleLine}>showShareActionSheetMulpitleLine</Button>
    </WingBlank>);
  }
}

ReactDOM.render(<Test />, mountNode);
````
