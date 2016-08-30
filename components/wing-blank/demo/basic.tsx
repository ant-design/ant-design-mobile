import * as React from 'react';
import { View } from 'react-native';
import { WhiteSpace, WingBlank, Button } from 'antd-mobile';

export default class BasicWingBlankExample extends React.Component<any, any> {
  render() {
    return (
      <View>
        <WhiteSpace />
        <WingBlank size="lg">
          <Button type="primary">两翼留白lg</Button>
        </WingBlank>
        <WhiteSpace />
        <View style={{
          borderBottomColor: '#108ee9',
          borderBottomWidth: 0.5,
        }}/>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary">两翼留白md(默认)</Button>
        </WingBlank>
        <WhiteSpace />
        <View style={{
          borderBottomColor: '#108ee9',
          borderBottomWidth: 0.5,
        }}/>
        <WhiteSpace />
        <WingBlank size="sm">
          <Button type="primary">两翼留sm</Button>
        </WingBlank>
        <WhiteSpace />
        <View style={{
          borderBottomColor: '#108ee9',
          borderBottomWidth: 0.5,
        }}/>
      </View>
    );
  }
}
