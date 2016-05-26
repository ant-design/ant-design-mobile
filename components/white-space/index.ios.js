// WhiteSpace
import React, { PropTypes } from 'react';
import { View } from 'react-native';

class WhiteSpace extends React.Component {
  static propTypes = {
    mode: PropTypes.oneOf([4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48]),
  };

  static defaultProps = {
    mode: 8
  };

  render() {
    const marginHeight = this.props.mode;
    return (
      <View style={[{ height: marginHeight }, this.props.style]} />
    );
  }
}

export default WhiteSpace;
