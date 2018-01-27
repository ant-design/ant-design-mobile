---
order: 2
title:
  zh-CN: 输入弹窗
  en-US: Prompt
---

## zh-CN

包含输入普通文字, 密码, 登录信息样式。

## en-US

Including normal text input modal, password input modal and login information input modal.

````jsx
import { Modal, Button, WingBlank, WhiteSpace, Toast } from 'antd-mobile';

const prompt = Modal.prompt;

const App = () => (
  <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Button onClick={() => prompt('input name', 'please input your name',
      [
        {
          text: 'Close',
          onPress: value => new Promise((resolve) => {
            Toast.info('onPress promise resolve', 1);
            setTimeout(() => {
              resolve();
              console.log(`value:${value}`);
            }, 1000);
          }),
        },
        {
          text: 'Hold on',
          onPress: value => new Promise((resolve, reject) => {
            Toast.info('onPress promise reject', 1);
            setTimeout(() => {
              reject();
              console.log(`value:${value}`);
            }, 1000);
          }),
        },
      ], 'default', null, ['input your name'])}
    >promise</Button>

    <WhiteSpace size="lg" />
    <Button onClick={() => prompt('defaultValue', 'defaultValue for prompt', [
      { text: 'Cancel' },
      { text: 'Submit', onPress: value => console.log(`输入的内容:${value}`) },
    ], 'default', '100')}
    >defaultValue</Button>

    <WhiteSpace size="lg" />
    <Button onClick={() => prompt(
      'Password',
      'Password Message',
      password => console.log(`password: ${password}`),
      'secure-text',
    )}
    >secure-text</Button>

    <WhiteSpace size="lg" />
    <Button onClick={() => prompt(
      'Password',
      'You can custom buttons',
      [
        { text: '取消' },
        { text: '提交', onPress: password => console.log(`密码为:${password}`) },
      ],
      'secure-text',
    )}
    >custom buttons</Button>

    <WhiteSpace size="lg" />
    <Button onClick={() => prompt(
      'Login',
      'Please input login information',
      (login, password) => console.log(`login: ${login}, password: ${password}`),
      'login-password',
      null,
      ['Please input name', 'Please input password'],
    )}
    >login-password</Button>

    <WhiteSpace size="lg" />
  </WingBlank>
);


ReactDOM.render(<App />, mountNode);

````
