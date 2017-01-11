/* tslint:disable:no-console */
import React from 'react';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { DeviceEventEmitter } from 'react-native';

function showToast() {
  Toast.info('这是一个 toast 提示!!!');
}

function successToast() {
  Toast.success('加载成功!!!', 1);
}

function showToastNoMask() {
  Toast.info('无 mask 的 toast !!!', 1, null, false);
}

function failToast() {
  Toast.fail('加载失败!!!');
}

function offline() {
  Toast.offline('网络连接失败!!!');
}

function loadingToast() {
  Toast.loading('加载中...', 1, () => {
    console.log('加载完成!!!');
  });
}

export default class ToastExample extends React.Component<any, any> {
  timer: any;
  componentDidMount() {
    DeviceEventEmitter.addListener('navigatorBack', () => {
      Toast.hide();
    });
  }

  componentWillUnmount () {
    (DeviceEventEmitter as any).removeAllListeners('navigatorBack');
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  alwaysShowToast = () => {
    Toast.info('这是一个 duration 为 0 的 toast!!!', 0);
    this.timer = setTimeout(() => {
      Toast.hide();
    }, 5000);
  }

  render() {
    return (
      <WingBlank style={{ marginTop: 80 }}>
        <WhiteSpace />
        <Button onClick={showToastNoMask}>无 mask</Button>
        <WhiteSpace />
        <Button onClick={showToast}>纯文字 toast</Button>
        <WhiteSpace />
        <Button onClick={successToast}>成功 toast</Button>
        <WhiteSpace />
        <Button onClick={failToast}>失败 toast</Button>
        <WhiteSpace />
        <Button onClick={offline}>网络 toast</Button>
        <WhiteSpace />
        <Button onClick={loadingToast}>加载中 toast</Button>
        <WhiteSpace />
        <Button onClick={this.alwaysShowToast}>duration 为 0 的 toast</Button>
        <WhiteSpace />
      </WingBlank>
    );
  }
}
