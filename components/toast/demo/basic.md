---
order: 0
title: 普通
---

纯文字、纯图标、成功、失败、离线、loading


````jsx
import { Toast, WhiteSpace, WingBlank, Button } from 'antm';

function showToast() {
  Toast.info('这是一个 toast 提示!!!');
}

function successToast() {
  Toast.success('加载成功!!!', 2);
}

function failToast() {
  Toast.fail('加载失败!!!');
}

function offline() {
  Toast.offline('网络连接失败!!!');
}

function loadingToast() {
  Toast.loading('加载中...', () => {
    console.log('加载完成!!!');
  });
}

const ToastExample = React.createClass({
  render() {
    return (
      <div className="toast-container">
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onClick={showToast}>纯文字 toast</Button>
        </WingBlank>
       <WhiteSpace />
        <WingBlank>
          <Button type="primary" ghost onClick={successToast}>成功 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onClick={failToast}>失败 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" ghost onClick={offline}>网络 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onClick={loadingToast}>加载中 toast</Button>
        </WingBlank>
        <WhiteSpace />
      </div>
    );
  },
});

ReactDOM.render(<ToastExample />, mountNode);
````
