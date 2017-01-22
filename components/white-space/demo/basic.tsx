import { WhiteSpace } from 'antd-mobile';
import React from 'react';
import { View, Text } from 'react-native';

const PlaceHolder = (props) => (
  <View style={{
    backgroundColor: '#ebebef',
    height: 30,
  }} {...props}
  ><Text style={{ color: '#bbb', textAlign: 'center', lineHeight: 30 }}>Block</Text></View>
);

export default class WhiteSpaceExample extends React.Component<any, any> {
  render() {
    return (
      <View>
        <WhiteSpace size="xs" />
        <PlaceHolder />

        <WhiteSpace size="sm" />
        <PlaceHolder />

        <WhiteSpace />
        <PlaceHolder />

        <WhiteSpace size="lg" />
        <PlaceHolder />

        <WhiteSpace size="xl" />
        <PlaceHolder />
      </View>
    );
  }
}
