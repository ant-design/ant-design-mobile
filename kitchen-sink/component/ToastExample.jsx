import React from 'react';
import Page from '../common/Page';
import { Toast } from 'antm';

const ToastExample = React.createClass({
  getInitialState() {
    return {
      mode: 0,
    };
  },
  componentDidMount() {
    window.toastInterval = setInterval(() => {
      this.setState({
        mode: this.state.mode + 1
      });
    }, 2000);
  },
  componentWillUnmount() {
    clearInterval(window.toastInterval);
  },
  render() {
    const { mode } = this.state;
    let toastDom = null;
    switch (mode % 5) {
      case 0:
        toastDom = <Toast mode="loading"/>;
        break;
      case 1:
        toastDom = <Toast mode="network">网络无法连接</Toast>;
        break;
      case 2:
        toastDom = <Toast mode="success">成功提醒</Toast>;
        break;
      case 3:
        toastDom = <Toast mode="fail">失败提醒</Toast>;
        break;
      case 4:
        toastDom = <Toast>出错了!</Toast>;
        break;
      default:
        break;
    }
    return (
      <Page title="轻提示" subtitle="&lt;Toast mode='success' /&gt;">
        {toastDom}
      </Page>
    );
  },
});

export default ToastExample;
