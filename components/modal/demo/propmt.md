---
order: 2
title: 输入框
---

包含输入普通文字, 密码, 登录信息样式

---

````jsx
import { Modal, Button, WingBlank, WhiteSpace } from 'antm';
const prompt = Modal.prompt;

let App = React.createClass({
  render() {
    return (
      <div>
        <WhiteSpace mode={20} />
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
        <WhiteSpace mode={20} />
      </div>
    );
  }
});


ReactDOM.render(
  <App />
, mountNode);

````
