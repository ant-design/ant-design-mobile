/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { modal, Button, WhiteSpace, WingBlank } from 'antm';

let ModalExample = React.createClass({
  render() {
    const content = (
      <input ref="name" name="name" defaultValue="123" style={{width: '230px', border: '1px solid #d2d2d2'}} />
    );
    return (
      <Page title="Modal" subtitle="&lt;Modal /&gt;">
        <WingBlank mode={20}>
          <Button onClick={() => {
            modal('不存在按钮的情况', '这是内容啊...', null, true);
          }}>alert 无按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank mode={20}>
          <Button onClick={() => {
            modal('加载成功', '你已经成功加载页面', [
              {text: '确定', onPress: () => console.log('ok')}
            ]);
          }}>自定义按钮 </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank mode={20}>
          <Button onClick={() => {
            modal('删除', '确定删除么???', [
              {text: '取消', onPress: () => console.log('cancel')},
              {text: '确定', onPress: () => console.log('ok')}
            ]);
          }}>确认对话框</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank mode={20}>
          <Button onClick={() => {
            modal('多个按钮情况', <div>这里有好多个按钮, 你试试</div>, [
              {text: '按钮', onPress: () => console.log('ok')},
              {text: '按钮', onPress: () => console.log('ok')},
              {text: '按钮', onPress: () => console.log('ok')},
              {onPress: () => console.log('ok')},
            ]);
          }}>弹出多个按钮 </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank mode={20}>
          <Button onClick={() => {
            modal('输入名字', content, [
              {text: '确定', onPress: () => {
                console.log(this.refs.name.value);
              }}
            ]);
          }}>输入框形式 </Button>
        </WingBlank>
      </Page>
    );
  }
});

export default ModalExample;
