// WingBlank
import { PropTypes } from 'react';
import * as React from 'react';
import { View } from 'react-native';

import WingBlankProps from './WingBlankPropsType';

class WingBlank extends React.Component<WingBlankProps, any> {
  static propTypes = {
    size: PropTypes.oneOf([4, 8, 12, 16, 20, 24, 28, 32]),
  };

  static defaultProps = {
    size: 8,
  };

  render() {
    const { size, style, children } = this.props;
    return (<View style={[{ marginLeft: size, marginRight: size }, style]}>
      {children}
    </View>);
  }
}

export default WingBlank;
