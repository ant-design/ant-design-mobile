import React from 'react';
import { View } from 'react-native';
import varibles from '../style/themes/default.native';

import WingBlankProps from './PropsType';

class WingBlank extends React.Component<WingBlankProps, any> {

  static defaultProps = {
    size: 'lg',
  };

  render() {
    const { size, style, children } = this.props;
    const margin = varibles[`h_spacing_${size}`];
    return (
      <View style={[{ marginLeft: margin, marginRight: margin }, style]}>
        {children}
      </View>
    );
  }
}

export default WingBlank;
