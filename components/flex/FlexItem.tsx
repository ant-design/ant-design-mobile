import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { FlexItemProps } from './PropsType';

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
