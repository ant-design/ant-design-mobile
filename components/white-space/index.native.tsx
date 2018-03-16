import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import varibles from '../style/themes/default.native';
import { WhiteSpacePropsType } from './PropsType';
export interface WhiteSpaceProps extends WhiteSpacePropsType {
  style?: StyleProp<ViewStyle>;
}
class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
  static defaultProps = {
    size: 'md',
  };

  render() {
    const { size, style } = this.props;
    return (
      <View
        style={[{ height: (varibles as any)[`v_spacing_${size}`] }, style]}
      />
    );
  }
}

export default WhiteSpace;
