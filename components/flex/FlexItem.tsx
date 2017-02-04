import React from 'react';
import { View } from 'react-native';
import { FlexItemProps } from './PropsType';

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
