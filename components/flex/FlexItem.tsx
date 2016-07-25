import * as React from 'react';
import { View } from 'react-native';
import splitObject from '../_util/splitObject';

export interface FlexItemProps {
  flex?: number;
}

export default class FlexItem extends React.Component<FlexItemProps, any> {
  static defaultProps = {
    flex: 1,
  };
  render() {
    let[{ style, children, flex }, restProps] = splitObject(this.props,
      ['style', 'children', 'flex']);
    const flexItemStyle = {
      flex: flex || 1,
    };
    return (
      <View style={[flexItemStyle, style]} {...restProps}>
        {children}
      </View>
    );
  }
}
