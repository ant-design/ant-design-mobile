---
order: 0
title: 普通
---

````jsx
import { Toast, WhiteSpace, WingBlank, Button } from 'antm';

const ToastExample = React.createClass({
  render() {
    return (
      <div className="toast-container">
        <WingBlank>
          <Button type="primary" onClick={() => {
            Toast.info('这是一个 toast 提示!!!');
          }}>纯文字 toast</Button>
        </WingBlank>
       <WhiteSpace />
        <WingBlank>
          <Button type="primary" ghost onClick={() => {
            Toast.success('加载成功!!!', 2);
          }}>成功 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onClick={() => {
            Toast.fail('加载失败!!!');
          }}>失败 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" ghost onClick={() => {
            Toast.network('网络连接失败!!!');
          }}>网络 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onClick={() => {
            Toast.loading('加载中...', () => {
              console.log('close');
            });
          }}>加载中 toast</Button>
        </WingBlank>
      </div>
    );
  },
});

ReactDOM.render(<ToastExample />, mountNode);
````
