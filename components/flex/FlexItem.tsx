import * as React from 'react';
import { View } from 'react-native';

export interface FlexItemProps {
  flex?: number;
  style?: React.CSSProperties;
  children?: any;
}

export default class FlexItem extends React.Component<FlexItemProps, any> {
  static defaultProps = {
    flex: 1,
  };
  render() {
    let { style, children, flex } = this.props;
    const flexItemStyle = {
      flex: flex || 1,
    };
    return (
      <View style={[flexItemStyle, style]}>
        {children}
      </View>
    );
  }
}
