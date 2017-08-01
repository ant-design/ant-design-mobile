import React from 'react';
import { View } from 'react-native';

export default class TabPane extends React.Component<any, any> {
  render() {
    const { children } = this.props;
    return (
        <View>
          {children}
        </View>
    );
  }
}
