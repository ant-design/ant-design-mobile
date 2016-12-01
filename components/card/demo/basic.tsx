import React from 'react';
import { View, Text } from 'react-native';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';

export default class BasicCardExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ paddingTop: 30 }}>
        <WingBlank size="lg">
          <Card>
            <Card.Header
              title="这是 title"
              thumbStyle={{ width: 30, height: 30 }}
              thumb="http://gravatar.com/avatar/e9c13fb979736b16033acbce4c710ca1.png?size=32"
              extra="this is extra"
            />
            <Card.Body>
              <View style={{ height: 42 }}>
                <Text style={{ marginLeft: 16 }}>这是卡片内容</Text>
              </View>
            </Card.Body>
            <Card.Footer content="这是卡尾" extra="这是尾部介绍" />
          </Card>
        </WingBlank>
        <WhiteSpace size="lg" />
        <Card full>
          <Card.Header
            title="这是 title"
            thumbStyle={{ width: 30, height: 30 }}
            thumb="http://gravatar.com/avatar/e9c13fb979736b16033acbce4c710ca1.png?size=32"
            extra="this is extra"
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
