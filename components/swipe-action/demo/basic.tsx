/* tslint:disable:no-console */
import React from 'react';
import { View, Platform } from 'react-native';
import { SwipeAction, List } from 'antd-mobile';

export default class BasicSwipeActionExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ paddingTop: 30 }}>
        <List>
          <SwipeAction
            autoClose
            style={{ backgroundColor: 'transparent' }}
            right={[
              {
                text: 'more',
                onPress: () => console.log('more'),
                style: Platform.OS === 'ios' ? { backgroundColor: 'orange', color: 'white' } : {},
              },
              {
                text: 'delete',
                onPress: () => console.log('删除'),
                style: Platform.OS === 'ios' ? { backgroundColor: 'red', color: 'white' } : {},
              },
            ]}
            left={[
              {
                text: '阅读',
                onPress: () => console.log('阅读'),
                style: Platform.OS === 'ios' ? { backgroundColor: 'blue', color: 'white' } : {},
              },
              {
                text: '回复',
                onPress: () => console.log('回复'),
                style: Platform.OS === 'ios' ? { backgroundColor: 'green', color: 'white' } : {},
              },
            ]}
            onOpen={ () => console.log('open') }
            onClose={ () => console.log('close') }
          >
            <List.Item extra="额外参数">
              简单例子 - 左右都可操作
            </List.Item>
          </SwipeAction>
        </List>
      </View>
    );
  }
}
