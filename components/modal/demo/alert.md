---
order: 3
title: 弹出框
---

包含无按钮, 确认框, 多按钮情况

````jsx
import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';

const alert = Modal.alert;

function showAlert() {
  alert('删除', '确定删除么???', [
    { text: 'cancel', onPress: () => console.log('cancel'), style: 'default' },
    { text: 'ok', onPress: () => console.log('ok') },
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
    { text: '按钮一', onPress: () => console.log('第0个按钮被点击了') },
    { text: '按钮二', onPress: () => console.log('第1个按钮被点击了') },
    { text: '按钮三', onPress: () => console.log('第2个按钮被点击了') },
  ]);
}

const App = React.createClass({
  render() {
    return (
      <div>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Button type="ghost" onClick={showAlert}>自定义按钮 </Button>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Button type="ghost" onClick={showConfirm}>确认对话框</Button>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Button type="ghost" onClick={showMoreBtn}>弹出多个按钮 </Button>
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
