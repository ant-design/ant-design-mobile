// WhiteSpace
import React from 'react';
import { View } from 'react-native';
import WhiteSpaceProps from './PropsType';
import varibles from '../style/themes/default.native';

class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
  static defaultProps = {
    size: 'md',
  };

  render() {
    const { size, style } = this.props;
    return (
      <View style={[{ height: varibles[`v_spacing_${size}`] }, style]} />
    );
  }
}

export default WhiteSpace;
