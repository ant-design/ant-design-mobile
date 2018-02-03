import React from 'react';
import {
  StyleProp,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import { FlexItemPropsType } from './PropsType';

export interface FlexItemProps extends FlexItemPropsType {
  flex?: number;
  onPress?: () => void;
  onLongPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  style?: StyleProp<ViewStyle>;
}

export default class FlexItem extends React.Component<FlexItemProps, any> {
  static defaultProps = {
    flex: 1,
  };
  render() {
    const { style, children, flex, ...restProps } = this.props;
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
      restProps.onPress ||
      restProps.onLongPress ||
      restProps.onPressIn ||
      restProps.onPressOut;

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
