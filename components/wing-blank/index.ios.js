// WingBlank
import React, { View, PropTypes } from 'react-native';

class WingBlank extends React.Component {
  static propTypes = {
    mode: PropTypes.oneOf([4, 8, 12, 16, 20, 24, 28, 32]),
  };

  static defaultProps = {
    mode: 8
  };

  render() {
    const margin = this.props.mode;
    return (
      // <View {...this.props} style={{height:marginHeight}}>
      <View style={[{ marginLeft: margin, marginRight: margin }, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

export default WingBlank;
