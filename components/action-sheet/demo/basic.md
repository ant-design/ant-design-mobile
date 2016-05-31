---
order: 0
title: ActionSheet
---


````jsx
import { ActionSheet, Button, WingBlank, WhiteSpace } from 'antm';

const Test = React.createClass({
  getInitialState() {
    return {
      clicked: 'none',
      BUTTONS: [
        '按钮 0',
        '按钮 1',
        '按钮 2',
        '删除',
        '取消',
      ],
      icons: [
        {
          icon: <img src="https://os.alipayobjects.com/rmsportal/zfQfLxUmXfgWech.png" style={{
            height: 27,
            verticalAlign: 'top',
          }} />,
          title: '支付宝',
        },
        {
          icon: <img src="https://os.alipayobjects.com/rmsportal/pTINxOHGLBxzEAG.png" style={{
            height: 27,
            verticalAlign: 'top',
          }} />,
          title: '微信好友',
        },
        {
          icon: <img src="https://os.alipayobjects.com/rmsportal/VMjNbIuafpXfjQE.png" style={{
            height: 27,
            verticalAlign: 'top',
          }} />,
          title: 'QQ',
        },
        { iconName: 'android', title: '用Android' },
        { iconName: 'apple', title: '用Apple' },
      ],
    };
  },
  showActionSheet() {
    const BUTTONS = this.state.BUTTONS;
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      title: '标题',
      message: '我是具体消息',
      maskClosable: false,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  },
  showShareActionSheet() {
    const icons = this.state.icons;
    ActionSheet.showShareActionSheetWithOptions({
      options: icons,
      title: '标题',
      message: '我是具体消息',
    },
    (buttonIndex) => {
      this.setState({ clicked: icons[buttonIndex].title });
    });
  },
  showActionSheetWithCustom() {
    ActionSheet.showActionSheetWithCustom({
      title: '自定义 ActionSheet',
      message: '我是具体消息',
      component: <div style={{ color: 'red', padding: 20 }}>
        自定义内容 &nbsp;
        <Button inline size="small" onClick={() => ActionSheet.close()}>关闭</Button>
      </div>,
    });
  },
  render() {
    return (<div>
      <WingBlank>
        <WhiteSpace />
        <h4>通常的 ActionSheet</h4>
        <WhiteSpace />
        <Button type="primary" onClick={this.showActionSheet}>显示</Button>
        <WhiteSpace />
        <p>点击过的按钮: {this.state.clicked}</p>

        <WhiteSpace mode={16} />
        <h4>带分享功能的 ActionSheet</h4>
        <WhiteSpace />
        <Button type="primary" onClick={this.showShareActionSheet}>显示</Button>
        <WhiteSpace />
        <p>点击过的icon: {this.state.clicked}</p>

        <WhiteSpace mode={16} />
        <h4>内容可以完全自定义的 ActionSheet</h4>
        <WhiteSpace />
        <Button type="primary" onClick={this.showActionSheetWithCustom}>显示</Button>
      </WingBlank>
    </div>);
  }
});

ReactDOM.render(<Test />, mountNode);
````
