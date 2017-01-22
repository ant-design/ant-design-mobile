import React from 'react';
import { View, Text } from 'react-native';
import { WhiteSpace, WingBlank } from 'antd-mobile';

const PlaceHolder = (props) => (
  <View style={{
    backgroundColor: '#ebebef',
    height: 30,
  }} {...props}
  ><Text style={{ color: '#bbb', textAlign: 'center', lineHeight: 30 }}>Block</Text></View>
);

export default class WingBlankExample extends React.Component<any, any> {
  render() {
    return (
      <View>
        <WhiteSpace />
        <WingBlank><PlaceHolder /></WingBlank>

        <WhiteSpace size="lg" />
        <WingBlank size="md"><PlaceHolder /></WingBlank>

        <WhiteSpace size="lg" />
        <WingBlank size="sm"><PlaceHolder /></WingBlank>
      </View>
    );
  }
}
