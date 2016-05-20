// WhiteSpace
import React, { View, PropTypes } from 'react-native';

const WhiteSpace = React.createClass({
  propTypes: {
    mode: PropTypes.oneOf([4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48]),
  },

  getDefaultProps() {
    return {
      mode: 8
    };
  },

  render() {
    const marginHeight = this.props.mode;
    return (
      // <View {...this.props} style={{height:marginHeight}}>
      <View style={[{ height: marginHeight }, this.props.style]} />
    );
  }
});

export default WhiteSpace;
