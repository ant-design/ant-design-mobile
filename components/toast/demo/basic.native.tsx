/* tslint:disable:no-console */
import { Button, Toast, WhiteSpace, WingBlank } from 'antd-mobile';
import React from 'react';
import { DeviceEventEmitter } from 'react-native';

function showToast() {
  Toast.info('This is a toast tips !!!');
}

function successToast() {
  Toast.success('Load success !!!', 1);
}

function showToastNoMask() {
  Toast.info('Toast without mask !!!', 1, null, false);
}

function failToast() {
  Toast.fail('Load failed !!!');
}

function offline() {
  Toast.offline('Network connection failed !!!');
}

function loadingToast() {
  Toast.loading('Loading...', 1, () => {
    console.log('Load complete !!!');
  });
}

export default class ToastExample extends React.Component<any, any> {
  timer: any;
  componentDidMount() {
    DeviceEventEmitter.addListener('navigatorBack', () => {
      Toast.hide();
    });
  }

  componentWillUnmount() {
    (DeviceEventEmitter as any).removeAllListeners('navigatorBack');
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  alwaysShowToast = () => {
    Toast.info('A toast width duration = 0 !!!', 0);
    this.timer = setTimeout(() => {
      Toast.hide();
    }, 5000);
  }

  render() {
    return (
      <WingBlank style={{ marginTop: 80 }}>
        <WhiteSpace />
        <Button onClick={showToastNoMask}>Without mask</Button>
        <WhiteSpace />
        <Button onClick={showToast}>Text toast</Button>
        <WhiteSpace />
        <Button onClick={successToast}>Success toast</Button>
        <WhiteSpace />
        <Button onClick={failToast}>Failed toast</Button>
        <WhiteSpace />
        <Button onClick={offline}>Network failure toast</Button>
        <WhiteSpace />
        <Button onClick={loadingToast}>Loading toast</Button>
        <WhiteSpace />
        <Button onClick={this.alwaysShowToast}>Toast width duration = 0</Button>
        <WhiteSpace />
      </WingBlank>
    );
  }
}
