/* tslint:disable:no-console */
import * as React from 'react';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { View, DeviceEventEmitter } from 'react-native';

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

export default class ToastExample extends React.Component<any, any> {
  componentDidMount() {
    DeviceEventEmitter.addListener('navigatorBack', () => {
      Toast.hide();
    });
  }

  componentWillUnmount () {
    DeviceEventEmitter.removeAllListeners('navigatorBack');
  }

  render() {
    return (
      <View style={{marginTop: 30}}>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onPress={showToast}>纯文字 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="ghost" onPress={successToast}>成功 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onPress={failToast}>失败 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="ghost" onPress={offline}>网络 toast</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onPress={loadingToast}>加载中 toast</Button>
        </WingBlank>
        <WhiteSpace />
      </View>
    );
  }
}
