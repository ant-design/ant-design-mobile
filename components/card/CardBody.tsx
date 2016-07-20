import * as React from 'react';
import { View } from 'react-native';
import splitObject from '../_util/splitObject';
import CardStyle from './style/index';

export interface CardBodyProps {
  children?: any;
  style?: {};
}

export default class CardBody extends React.Component<CardBodyProps, any> {
  static defaultProps = {
    style: {},
  };

  render() {
    let [{children, style}, restProps] = splitObject(
      this.props, ['children', 'style']
    );

    return (
      <View style={[CardStyle.body, style]} {...restProps}>{children}</View>
    );
  }
}
