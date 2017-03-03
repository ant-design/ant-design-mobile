---
order: 3
title: 
  zh-CN: 操作
  en-US: operation
---

操作对话框

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
    >操作按钮</Button>
    <WhiteSpace size="lg" />
  </WingBlank>
);

ReactDOM.render(<App />, mountNode);

````
