import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import splitObject from '../_util/splitObject';
import CardStyle from './style/index';

export default class CardBody extends React.Component {

  static defaultProps = {
    style: {},
  };

  render() {
    let [{children, style}, restProps] = splitObject(
      this.props, ['children', 'style']
    );

    return (
      <View style={[CardStyle.Body, style]} {...restProps}>{children}</View>
    );
  }
}

