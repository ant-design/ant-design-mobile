import * as React from 'react';
import { View, Text } from 'react-native';
import { WhiteSpace, WingBlank } from 'antd-mobile';

export default class BasicWingBlankExample extends React.Component<any, any> {
  render() {
    return (
      <View>
        <WhiteSpace />
        <WingBlank>
          <Text style={{ textAlign: 'center', backgroundColor: '#108ee9' }}>
            两翼留白8px
          </Text>
        </WingBlank>
        <WhiteSpace />
        <WingBlank size={20}>
          <Text style={{ textAlign: 'center', backgroundColor: '#108ee9' }}>
            两翼留白20px
          </Text>
        </WingBlank>
        <WhiteSpace />
        <WingBlank size={32}>
          <Text style={{ textAlign: 'center', backgroundColor: '#108ee9' }}>
            两翼留32px
          </Text>
        </WingBlank>
        <WhiteSpace />
      </View>
    );
  }
}
