// WhiteSpace
import { PropTypes } from 'react';
import * as React from 'react';
import { View } from 'react-native';
import WhiteSpaceProps from './WhiteSpacePropsType';

class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
  static defaultProps = {
    size: 8,
  };

  render() {
    const { size, style } = this.props;
    return (
      <View style={[{ height: size }, style]} />
    );
  }
}

export default WhiteSpace;
