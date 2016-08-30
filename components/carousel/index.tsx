import * as React from 'react';
import { Text } from 'react-native';
import ViewPager from './ViewPager';

export default React.createClass({
  render() {
    const { children } = this.props;

    if (!children) {
      return (
        <Text style={{backgroundColor: 'white'}}>
          You are supposed to add children inside Carousel
        </Text>
      );
    }

    return (
      <ViewPager style={[this.props.style]} {...this.props} bounces={true}>
        {children}
      </ViewPager>
    );
  },
});
