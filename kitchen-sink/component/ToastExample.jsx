import React from 'react';
import Page from '../common/Page';
import { Toast, WhiteSpace, WingBlank, Button } from 'antm';

const ToastExample = React.createClass({
  componentWillUnmount () {
    Toast.destroy();
  },
  render() {
    return (
      <Page title="轻提示" subtitle="&lt;Toast mode='success' /&gt;">
        <WingBlank>
          <Button type="primary" onClick={() => {
            Toast.info('这是一个 toast 提示!!!')
          }}>纯文字 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" ghost onClick={() => {
            Toast.success('加载成功!!!', 2)
          }}>成功 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onClick={() => {
            Toast.fail('加载失败!!!')
          }}>失败 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" ghost onClick={() => {
            Toast.network('网络连接失败!!!')
          }}>网络 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onClick={() => {
            Toast.loading('加载中...', () => {
            alert('close')
            })
          }}>加载中 toast</Button>
        </WingBlank>
      </Page>
    );
  },
});

export default ToastExample;
