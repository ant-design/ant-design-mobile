import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { FlexItemNativeProps } from './PropsType';

export default class FlexItem extends React.Component<FlexItemNativeProps, any> {
  static defaultProps = {
    flex: 1,
  };
  render() {
    let { style, children, flex, ...restProps } = this.props;
    const flexItemStyle = {
      flex: flex || 1,
    };
    // support other touchablewithoutfeedback props
    // TODO  support TouchableHighlight
    return (
      <TouchableWithoutFeedback {...restProps}>
        <View style={[flexItemStyle, style]}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
