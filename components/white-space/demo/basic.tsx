import { WhiteSpace } from 'antd-mobile';
import * as React from 'react';
import { View, Text } from 'react-native';

export default class BasicWhiteSpaceExample extends React.Component<any, any> {
  render() {
    return (
      <View>
        <Text style={{ textAlign: 'center' }}>
          default 8 point
        </Text>
        <WhiteSpace style={{ backgroundColor: '#108ee9' }} />

        <Text style={{ textAlign: 'center' }}>
          16 point
        </Text>
        <WhiteSpace size={16} style={{ backgroundColor: '#108ee9' }} />

        <Text style={{ textAlign: 'center' }}>
          32 point
        </Text>
        <WhiteSpace size={32} style={{ backgroundColor: '#108ee9' }} />
      </View>
    );
  }
}
