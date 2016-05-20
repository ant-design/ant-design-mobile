// WingBlank
import React, { View, PropTypes } from 'react-native';

const WingBlank = React.createClass({
  propTypes: {
    mode: PropTypes.oneOf([4, 8, 12, 16, 20, 24, 28, 32]),
  },

  getDefaultProps() {
    return {
      mode: 8
    };
  },

  render() {
    const marginLeft = this.props.mode;
    const marginRight = this.props.mode;
    return (
      // <View {...this.props} style={{height:marginHeight}}>
      <View style={[{ marginLeft: marginLeft, marginRight: marginRight }, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
});

export default WingBlank;
