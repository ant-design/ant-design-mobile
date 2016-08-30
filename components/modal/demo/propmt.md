---
order: 4
title: 输入框
---

包含输入普通文字, 密码, 登录信息样式

````jsx
import { Modal, Button, WingBlank, WhiteSpace } from 'antd-mobile';

const prompt = Modal.prompt;

function plainTextPrompt() {
  prompt('输入名字', '这是名字的 message', [
    { text: '取消' },
    { text: '提交', onPress: value => console.log(`输入的内容:${value}`) },
  ]);
}

function passwordPrompt() {
  prompt(
    '输入密码',
    '这是密码message,可以不要',
    password => console.log(`password: ${password}`),
    'secure-text',
  );
}

function customBtnPrompt() {
  prompt(
    '输入密码',
    '这是密码message,可以不要',
    [
      { text: '取消' },
      { text: '提交', onPress: password => console.log(`密码为:${password}`) },
    ],
    'secure-text',
  );
}

function loginPwdPrompt() {
  prompt(
    '登录',
    '输入用户名和密码',
    (login, password) => console.log(`login: ${login}, password: ${password}`),
    'login-password',
  );
}

const App = React.createClass({
  render() {
    return (
      <div>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Button type="ghost" onClick={plainTextPrompt}>输入框按钮按钮 </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank size="lg">
          <Button type="ghost" onClick={passwordPrompt}>输入框密码形式 </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank size="lg">
          <Button type="ghost" onClick={customBtnPrompt}>自定义按钮形式 </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank size="lg">
          <Button type="ghost" onClick={loginPwdPrompt}>输入框登录形式 </Button>
        </WingBlank>
        <WhiteSpace size="lg" />
      </div>
    );
  },
});


ReactDOM.render(
  <App />
, mountNode);

````
