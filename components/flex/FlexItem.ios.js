import React, { PropTypes } from 'react';
import { View } from 'react-native';

export default class FlexItem extends React.Component {
  static propTypes = {
    flex: PropTypes.number
  };

  static defaultProps = {
    flex: 1
  };
  render() {
    let { style, children, flex, ...others } = this.props;
    const flexItemStyle = {
      flex: flex || 1
    };
    return (
      <View style={[flexItemStyle, style]} {...others}>
        {children}
      </View>
    );
  }
}
