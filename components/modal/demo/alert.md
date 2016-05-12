---
order: 1
title: 弹出框
---

包含无按钮, 确认框, 多按钮情况

---

````jsx
import { Modal, Button, WhiteSpace, WingBlank } from 'antm';

const alert = Modal.alert;

const App = React.createClass({
  render() {
    return (
      <div>
        <WhiteSpace mode={20} />
        <WingBlank mode={20}>
          <Button onClick={() => {
            alert('加载成功', '你已经成功加载页面', [
              { text: '确定', onPress: () => console.log('ok') }
            ]);
          }}>自定义按钮 </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank mode={20}>
          <Button onClick={() => {
            alert('删除', '确定删除么???', [
              { text: '取消', onPress: () => console.log('cancel') },
              { text: '确定', onPress: () => console.log('ok') }
            ]);
          }}>确认对话框</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank mode={20}>
          <Button onClick={() => {
            alert('多个按钮情况', <div>这里有好多个按钮, 你试试</div>, [
              { text: '按钮', onPress: () => console.log('第0个按钮被点击了') },
              { text: '按钮', onPress: () => console.log('第1个按钮被点击了') },
              { text: '按钮', onPress: () => console.log('第2个按钮被点击了') },
              { onPress: () => console.log('第3个按钮被点击了') },
            ]);
          }}>弹出多个按钮 </Button>
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
