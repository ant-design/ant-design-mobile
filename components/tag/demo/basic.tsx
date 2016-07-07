import React from 'react';
import { View, Text } from 'react-native';
import Tag from '../index';
import WhiteSpace from '../../white-space';

export default class BasicTagExample extends React.Component {
  render() {
    return (
      <View style={{ padding: 10}}>
        <Text>12321321</Text>
        <Tag type="action" size="large">大号标签</Tag>
        <WhiteSpace />
        <Tag type="action" size="small">小号标签</Tag>
        <WhiteSpace />
        <Tag type="read" size="large">只读标签大</Tag>
        <WhiteSpace />
        <Tag type="read" size="small">只读标签小</Tag>
      </View>
    );
  }
}
