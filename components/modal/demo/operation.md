---
order: 3
title:
  zh-CN: 操作弹窗
  en-US: Operation
---

## zh-CN

操作对话框。

## en-US

Modal with operations.

````jsx
import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';

const operation = Modal.operation;

const App = () => (
  <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Button onClick={() => operation([
      { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
      { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') },
    ])}
    >operation</Button>
    <WhiteSpace size="lg" />
  </WingBlank>
);

ReactDOM.render(<App />, mountNode);

````
