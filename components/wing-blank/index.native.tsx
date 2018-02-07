import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import varibles from '../style/themes/default.native';

import { WingBlankPropsType } from './PropsType';
export interface WingBlankProps extends WingBlankPropsType {
  style?: StyleProp<ViewStyle>;
}
class WingBlank extends React.Component<WingBlankProps, any> {
  static defaultProps = {
    size: 'lg',
  };

  render() {
    const { size, style, children } = this.props;
    const margin = (varibles as any)[`h_spacing_${size}`];
    return (
      <View style={[{ marginLeft: margin, marginRight: margin }, style]}>
        {children}
      </View>
    );
  }
}

export default WingBlank;
