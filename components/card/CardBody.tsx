import React from 'react';
import { View } from 'react-native';

export interface CardBodyProps {
  children?: any;
  style?: {};
  styles: any;
}

export default class CardBody extends React.Component<CardBodyProps, any> {
  static defaultProps = {
    style: {},
  };

  render() {
    let { children, style, styles } = this.props;
    return (
      <View style={[styles.body, style]}>{children}</View>
    );
  }
}
