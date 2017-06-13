---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

text、icon、success、failure、offline、loading

````jsx
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

function showToast() {
  Toast.info('This is a toast tips !!!', 1);
}

function showToastNoMask() {
  Toast.info('Toast without mask !!!', 2, null, false);
}

function successToast() {
  Toast.success('Load success !!!', 1);
}

function failToast() {
  Toast.fail('Load failed !!!', 1);
}

function offline() {
  Toast.offline('Network connection failed !!!', 1);
}

function loadingToast() {
  Toast.loading('Loading...', 1, () => {
    console.log('Load complete !!!');
  });
}

const ToastExample = () => (
  <WingBlank>
    <WhiteSpace />
    <Button onClick={showToast}>Text toast</Button>
    <WhiteSpace />
    <Button onClick={showToastNoMask}>Without mask</Button>
    <WhiteSpace />
    <Button onClick={successToast}>Success toast</Button>
    <WhiteSpace />
    <Button onClick={failToast}>Failed toast</Button>
    <WhiteSpace />
    <Button onClick={offline}>Network failure toast</Button>
    <WhiteSpace />
    <Button onClick={loadingToast}>Loading toast</Button>
    <WhiteSpace />
  </WingBlank>
);

ReactDOM.render(<ToastExample />, mountNode);
````
