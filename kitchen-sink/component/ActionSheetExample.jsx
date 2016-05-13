import React from 'react';
import Page from '../common/Page';
import { ActionSheet, Button, WhiteSpace, WingBlank } from 'antm';

const ActionSheetExample = React.createClass({
  getInitialState() {
    return {
      clicked: 'none',
      BUTTONS: [
        'Option 0',
        'Option 1',
        'Option 2',
        'Delete',
        'Cancel',
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
      message: 'this is message',
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  },
  showShareActionSheet() {
    const icons = this.state.icons;
    ActionSheet.showShareActionSheetWithOptions({
      options: icons,
      message: 'this is message',
    },
    (buttonIndex) => {
      this.setState({ clicked: icons[buttonIndex].title });
    });
  },
  showActionSheetWithCustom() {
    ActionSheet.showActionSheetWithCustom({
      message: 'this is message',
      component: <div style={{ color: 'red', padding: 20 }}>
        custom component
        <Button inline onClick={() => ActionSheet.close()}>close ActionSheet</Button>
      </div>
    });
  },
  render() {
    return (
      <Page title="ActionSheet" subtitle="ActionSheet">
        <WhiteSpace />
        <WingBlank>
          <h4>通常的 ActionSheet</h4>
          <Button type="primary" onClick={this.showActionSheet}>显示</Button>
          <p>点击过的按钮: {this.state.clicked}</p>
        </WingBlank>
        <WhiteSpace mode={16} />
        <WingBlank>
          <h4>带分享功能的 ActionSheet</h4>
          <Button type="primary" onClick={this.showShareActionSheet}>显示</Button>
          <p>点击过的icon: {this.state.clicked}</p>
        </WingBlank>
        <WhiteSpace mode={16} />
        <WingBlank>
          <h4>内容可以完全自定义的 ActionSheet</h4>
          <Button type="primary" onClick={this.showActionSheetWithCustom}>显示</Button>
        </WingBlank>
        <WhiteSpace />
      </Page>
    );
  },
});

export default ActionSheetExample;
