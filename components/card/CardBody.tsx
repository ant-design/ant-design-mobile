import * as React from 'react';
import { View } from 'react-native';
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
    let { children, style } = this.props;
    return (
      <View style={[CardStyle.body, style]}>{children}</View>
    );
  }
}
