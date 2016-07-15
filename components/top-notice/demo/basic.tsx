import * as React from 'react';
import { View, Text } from 'react-native';
import { TopNotice, WhiteSpace } from 'antm';

export default class TopNoticeExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <WhiteSpace mode={20} />
        <TopNotice>国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace mode={20} />
        <TopNotice mode="closable" onClick={() => {console.log('close');}}>
          国庆期间余额宝收益和转出到账时间1
        </TopNotice>
        <WhiteSpace mode={20} />
        <TopNotice type="error" mode="closable">国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace mode={20} />
        <TopNotice mode="link" type="info">国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace mode={20} />
        <TopNotice mode="link" type="question">国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace mode={20} />
        <TopNotice mode="closable" type="success">国庆期间余额宝收益和转出到账时间</TopNotice>
      </View>
    );
  }
}
