import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { FlexItemProps as BasePropsType } from './PropsType';

export interface FlexItemProps extends BasePropsType {
  flex?: number;
  onPress?: (e?: any) => void;
  onLongPress?: any;
  onPressIn?: any;
  onPressOut?: any;
}

export default class FlexItem extends React.Component <FlexItemProps, any> {
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
    const inner = (
      <View style={[flexItemStyle, style]} {...restProps}>
        {children}
      </View>
    );

    const shouldWrapInTouchableComponent =
      restProps.onPress
      || restProps.onLongPress
      || restProps.onPressIn
      || restProps.onPressOut;

    if (!!shouldWrapInTouchableComponent) {
      return (
        <TouchableWithoutFeedback {...restProps}>
          {inner}
        </TouchableWithoutFeedback>
      );
    } else {
      return inner;
    }
  }
}
