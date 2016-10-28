---
order: 0
title: 普通
---

纯文字、纯图标、成功、失败、离线、loading

````jsx
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

function showToast() {
  Toast.info('这是一个 toast 提示!!!');
}

function successToast() {
  Toast.success('加载成功!!!');
}

function failToast() {
  Toast.fail('加载失败!!!', 1);
}

function offline() {
  Toast.offline('网络连接失败!!!');
}

function loadingToast() {
  Toast.loading('加载中...', 1, () => {
    console.log('加载完成!!!');
  });
}

function alwaysShowToast() {
  Toast.info('这是一个 duration 为 0 的 toast!!!', 0);
}

const ToastExample = React.createClass({
  render() {
    return (
      <div className="toast-container">
        <WhiteSpace />
        <WingBlank>
          <Button type="ghost" onClick={showToast}>纯文字 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="ghost" onClick={successToast}>成功 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="ghost" onClick={failToast}>失败 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="ghost" onClick={offline}>网络 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="ghost" onClick={loadingToast}>加载中 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="ghost" onClick={alwaysShowToast}>duration 为 0 的 toast</Button>
        </WingBlank>
        <WhiteSpace />
      </div>
    );
  },
});

ReactDOM.render(<ToastExample />, mountNode);
````
