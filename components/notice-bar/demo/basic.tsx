/* tslint:disable:no-console */
import React from 'react';
import { View, Image } from 'react-native';
import { NoticeBar, WhiteSpace } from 'antd-mobile';

export default class NoticeBarExample extends React.Component<any, any> {
  render() {
    const customIcon = (
      <Image
        source={{uri: 'https://zos.alipayobjects.com/rmsportal/bRnouywfdRsCcLU.png'}}
        style={{ width: 12, height: 12 }}
      />
    );

    return (
      <View style={{ marginTop: 10 }}>
        <WhiteSpace size="lg" />
        <NoticeBar onClick={() => alert('click')}>国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="closable" onClick={() => alert('will close')}>
          国庆期间余额宝收益和转出到账时间1
        </NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar
          mode="closable"
          icon={customIcon}
        >
          自定义 NoticeBar 前面的图标
        </NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="link" onClick={() => alert('link')}>国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="link">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="closable" icon={null}>去除 NoticeBar 默认的喇叭图标</NoticeBar>
      </View>
    );
  }
}
