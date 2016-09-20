import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

export interface FlexItemProps {
  flex?: number;
  style?: React.CSSProperties;
  onPress?: any;
  children?: any;
}

export default class FlexItem extends React.Component<FlexItemProps, any> {
  static defaultProps = {
    flex: 1,
  };
  render() {
    let { style, children, flex, onPress } = this.props;
    const flexItemStyle = {
      flex: flex || 1,
    };
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[flexItemStyle, style]}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
