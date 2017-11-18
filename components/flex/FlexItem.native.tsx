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

export default class FlexItem extends React.Component<FlexItemProps, any> {
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
      <View style={[flexItemStyle, style]} {...restProps }>
        {children}
      </View>
    );
  }
}
