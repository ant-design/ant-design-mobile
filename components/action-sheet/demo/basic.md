---
order: 0
title: 基本
---


````jsx
import { ActionSheet, Button } from 'antd-mobile';

const Test = React.createClass({
  getInitialState() {
    return {
      clicked: 'none',
      clicked1: 'none',
      BUTTONS: [
        '操作 0',
        '操作 1',
        '操作 2',
        '删除',
        '取消',
      ],
      icons: [
        {
          icon: <img src="https://os.alipayobjects.com/rmsportal/zfQfLxUmXfgWech.png" style={{
            height: 27,
            verticalAlign: 'top',
          }}
          />,
          title: '支付宝',
        },
        {
          icon: <img src="https://os.alipayobjects.com/rmsportal/pTINxOHGLBxzEAG.png" style={{
            height: 27,
            verticalAlign: 'top',
          }}
          />,
          title: '微信好友',
        },
        {
          icon: <img src="https://os.alipayobjects.com/rmsportal/VMjNbIuafpXfjQE.png" style={{
            height: 27,
            verticalAlign: 'top',
          }}
          />,
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
      // title: '标题',
      message: '我是描述我是描述',
      maskClosable: true,
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
      message: '我是描述我是描述',
    },
    (buttonIndex) => {
      this.setState({ clicked1: icons[buttonIndex].title });
    });
  },
  showActionSheetWithCustom() {
    ActionSheet.showActionSheetWithCustom({
      title: '自定义 ActionSheet',
      message: '我是描述我是描述',
      component: <div style={{ color: 'red', padding: 20 }}>
        自定义内容 &nbsp;
        <Button inline size="small" onClick={() => ActionSheet.close()}>关闭</Button>
      </div>,
    });
  },
  render() {
    return (<div style={{ margin: '0 8px' }}>
      <div style={{ margin: '32px 0' }}>
        <p className="demo-p">通常的 ActionSheet</p>
        <div style={{ padding: '8px 0' }}>
          <Button type="primary" onClick={this.showActionSheet}>选择操作</Button>
        </div>
        <p className="demo-p">点击过的按钮: &nbsp;
          <span style={{ color: '#222' }}>{this.state.clicked}</span>
        </p>
      </div>

      <div style={{ margin: '32px 0' }}>
        <p className="demo-p">带分享功能的 ActionSheet</p>
        <div style={{ padding: '8px 0' }}>
          <Button type="primary" onClick={this.showShareActionSheet}>我要分享</Button>
        </div>
        <p className="demo-p">点击过的icon: &nbsp;
          <span style={{ color: '#222' }}>{this.state.clicked1}</span>
        </p>
      </div>

      <div style={{ margin: '32px 0' }}>
        <p className="demo-p">内容可以完全自定义的 ActionSheet</p>
        <div style={{ padding: '8px 0' }}>
          <Button type="primary" onClick={this.showActionSheetWithCustom}>自定义</Button>
        </div>
      </div>
    </div>);
  },
});

ReactDOM.render(<Test />, mountNode);
````
