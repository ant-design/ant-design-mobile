// WingBlank
import * as React from 'react';
import { View } from 'react-native';
import varibles from '../style/themes/default';

import WingBlankProps from './WingBlankPropsType';

class WingBlank extends React.Component<WingBlankProps, any> {

  static defaultProps = {
    size: 'md',
  };

  render() {
    const { size, style, children } = this.props;
    return (<View style={[{
      marginLeft: varibles[`h_spacing_${size}`],
      marginRight: varibles[`h_spacing_${size}`]}, style]}
    >
      {children}
    </View>);
  }
}

export default WingBlank;
