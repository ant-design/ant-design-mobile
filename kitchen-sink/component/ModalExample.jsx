/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { Modal, Button, WhiteSpace, WingBlank } from 'antm';

const alert = Modal.alert;
const prompt = Modal.prompt;

let ModalExample = React.createClass({
  getInitialState() {
    return {
      visible: false,
    };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  closeModal() {
    this.setState({
      visible: false,
    });
  },
  render() {
    return (
      <Page title="Modal" subtitle="&lt;Modal /&gt;">
        <WingBlank mode={20}>
          <Button onClick={this.showModal}>显示带动画 modal </Button>
          <Modal key="2" animated={true} transparent={false} visible={this.state.visible} >
            这是内容...<br />
            这是内容...<br />
            <Button type="primary" inline onClick={this.closeModal}>close modal</Button>
          </Modal>
        </WingBlank>
        <WhiteSpace />
        <WingBlank mode={20}>
          <Button onClick={() => {
            alert('加载成功', '你已经成功加载页面', [
              {text: '确定', onPress: () => console.log('ok')}
            ]);
          }}>自定义按钮 </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank mode={20}>
          <Button onClick={() => {
            alert('删除', '确定删除么???', [
              {text: '取消', onPress: () => console.log('cancel')},
              {text: '确定', onPress: () => console.log('ok')}
            ]);
          }}>确认对话框</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank mode={20}>
          <Button onClick={() => {
            alert('多个按钮情况', <div>这里有好多个按钮, 你试试</div>, [
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
            prompt('输入名字', '这是名字的 message', name => {
              console.log(name);
            });
          }}>输入框回调形式 </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank mode={20}>
          <Button onClick={() => {
            prompt('输入名字', '这是名字的 message', [
              { text: '取消' },
              { text: '提交', onPress: value => console.log(`输入的内容:${value}`) }
            ]);
          }}>输入框按钮按钮 </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank mode={20}>
          <Button onClick={() => {
            prompt(
              '输入密码',
              '这是密码message,可以不要',
              password => console.log(`password: ${password}`),
              'secure-text'
            );
          }}>输入框密码形式 </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank mode={20}>
          <Button onClick={() => {
            prompt(
              '登录',
              '输入用户名和密码',
              (login, password) => console.log(`login: ${login}, password: ${password}`),
              'login-password'
            );
          }}>输入框登录形式 </Button>
        </WingBlank>
      </Page>
    );
  }
});

export default ModalExample;
