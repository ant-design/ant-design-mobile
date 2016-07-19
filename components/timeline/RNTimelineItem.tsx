import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default class RNTimelineItem extends React.Component<any, any> {

  render() {
    const { color, last, children } = this.props;
    const headColorStyle = `head_${color}`;
    return (
      <View style={[styles.container]}>
        { !last && <View style={[styles.tail]}></View> }
        <View style={[styles.head, styles[headColorStyle]]}></View>
        <View style={styles.content}>
          <Text>{ children }</Text>
        </View>
      </View>
    );
  }
}
