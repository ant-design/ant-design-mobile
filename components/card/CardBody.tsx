import React from 'react';
import { View } from 'react-native';
import { CardBodyProps } from './PropsType';

export default class CardBody extends React.Component<CardBodyProps, any> {
  static defaultProps = {
    style: {},
  };

  render() {
    let { style, styles, ...restProps } = this.props;
    return (
      <View style={[styles.body, style]} {...restProps} />
    );
  }
}
