---
order: 2
title: 弹出框
---

包含无按钮, 确认框, 多按钮情况

````jsx
import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';

const alert = Modal.alert;

function showAlert() {
  alert('删除', '确定删除么???', [
    { text: '取消', onPress: () => console.log('cancel') },
    { text: '确定', onPress: () => console.log('ok') },
  ]);
}

function showConfirm() {
  alert('删除', '确定删除么???', [
    { text: '取消', onPress: () => console.log('cancel') },
    { text: '确定', onPress: () => console.log('ok') },
  ]);
}

function showMoreBtn() {
  alert('多个按钮情况', <div>这里有好多个按钮, 你试试</div>, [
    { text: '按钮', onPress: () => console.log('第0个按钮被点击了') },
    { text: '按钮', onPress: () => console.log('第1个按钮被点击了') },
    { text: '按钮', onPress: () => console.log('第2个按钮被点击了') },
    { onPress: () => console.log('第3个按钮被点击了') },
  ]);
}

const App = React.createClass({
  render() {
    return (
      <div>
        <WhiteSpace size={20} />
        <WingBlank size={20}>
          <Button onClick={showAlert}>自定义按钮 </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank size={20}>
          <Button onClick={showConfirm}>确认对话框</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank size={20}>
          <Button onClick={showMoreBtn}>弹出多个按钮 </Button>
        </WingBlank>
        <WhiteSpace size={20} />
      </div>
    );
  },
});

ReactDOM.render(
  <App />
, mountNode);

````
