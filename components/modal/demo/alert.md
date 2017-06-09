---
order: 1
title:
  zh-CN: 警告弹窗
  en-US: alert
---

## zh-CN

包含无按钮, 确认框, 多按钮情况。

## en-US

Including situations like no button, confirm button and multiple buttons.

````jsx
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';

const alert = Modal.alert;

const showAlert = () => {
  const alertInstance = alert('删除', '确定删除么???', [
    { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
    { text: 'OK', onPress: () => console.log('ok'), style: { fontWeight: 'bold' } },
  ]);
  setTimeout(() => {
    // 可以调用close方法以在外部close
    console.log('auto close');
    alertInstance.close();
  }, 2000);
};

const App = () => (
  <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Button onClick={showAlert}> 自定义按钮 </Button>

    <WhiteSpace size="lg" />
    <Button onClick={() => alert('删除', '确定删除么???', [
      { text: '取消', onPress: () => console.log('cancel') },
      { text: '确定', onPress: () => console.log('ok'), style: { fontWeight: 'bold' } },
    ])}
    >确认对话框</Button>

    <WhiteSpace size="lg" />
    <Button onClick={() => alert('多个按钮情况', <div>这里有好多个按钮, 你试试</div>, [
      { text: '按钮一', onPress: () => console.log('第0个按钮被点击了') },
      { text: '按钮二', onPress: () => console.log('第1个按钮被点击了') },
      { text: '按钮三', onPress: () => console.log('第2个按钮被点击了') },
    ])}
    >弹出多个按钮 </Button>

    <WhiteSpace size="lg" />

    <Button onClick={() => alert('删除', '确定删除么???', [
      { text: '取消', onPress: () => console.log('cancel') },
      {
        text: '确定',
        onPress: () => new Promise((resolve) => {
          Toast.info('onPress Promise', 1);
          setTimeout(resolve, 1000);
        }),
        style: { fontWeight: 'bold' },
      },
    ])}
    >按钮 Promise</Button>

    <WhiteSpace size="lg" />
  </WingBlank>
);

ReactDOM.render(<App />, mountNode);

````
