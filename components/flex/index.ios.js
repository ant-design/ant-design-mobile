import React from 'react';
import { View } from 'react-native';


const Flex = React.createClass({
  render() {
    let { children } = this.props;

    return (
      <View>
        {children}
      </View>
    );
  }
});

export default Flex;
