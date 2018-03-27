/* tslint:disable:no-console */
import { List, SwipeAction } from 'antd-mobile';
import React from 'react';
import { View } from 'react-native';

export default class BasicSwipeActionExample extends React.Component<any, any> {
  render() {
    const right = [
      {
        text: 'More',
        onPress: () => console.log('more'),
        style: { backgroundColor: 'orange', color: 'white' },
      },
      {
        text: 'Delete',
        onPress: () => console.log('delete'),
        style: { backgroundColor: 'red', color: 'white' },
      },
    ];
    const left = [
      {
        text: 'Read',
        onPress: () => console.log('read'),
        style: { backgroundColor: 'blue', color: 'white' },
      },
      {
        text: 'Reply',
        onPress: () => console.log('reply'),
        style: { backgroundColor: 'green', color: 'white' },
      },
    ];

    return (
      <View style={{ paddingTop: 30 }}>
        <List>
          <SwipeAction
            autoClose
            style={{ backgroundColor: 'transparent' }}
            right={right}
            left={left}
            onOpen={() => console.log('open')}
            onClose={() => console.log('close')}
          >
            <List.Item extra="extra content">
              Simple example: left and right buttons
            </List.Item>
          </SwipeAction>
        </List>
      </View>
    );
  }
}
