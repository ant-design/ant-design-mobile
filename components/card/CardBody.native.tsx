import React from 'react';
import { View } from 'react-native';
import { CardBodyProps as BasePropsType } from './PropsType';

export interface CardBodyProps extends BasePropsType {
  styles?: any;
}

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
