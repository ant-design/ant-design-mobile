import React from 'react';
import { View, Text } from 'react-native';
import Card from '../index';

export default class BasicCardExample extends React.Component {
  render() {
    return (
      <View style={{ padding: 10}}>
        <Card>
          <Card.Header
            title="这是 title"
            thumbStyle={{ width: 30, height: 30 }}
            thumb="http://gravatar.com/avatar/e9c13fb979736b16033acbce4c710ca1.png?size=32"
            extra={<Text style={{ textAlign: 'right' }}>this is extra</Text>}
          />
          <Card.Body>
            <View style={{ height: 42 }}>
              <Text style={{ marginLeft: 16 }}>这是卡片内容</Text>
            </View>
          </Card.Body>
          <Card.Footer content="这是卡尾" extra="这是尾部介绍" />
        </Card>
      </View>
    );
  }
}
