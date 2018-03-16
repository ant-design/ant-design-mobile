import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import { CardPropsType } from './PropsType';
import CardStyle, { ICardStyle } from './style/index.native';

export interface CardNativeProps extends CardPropsType {
  styles?: ICardStyle;
  style?: StyleProp<ViewStyle>;
}

const CardStyles = StyleSheet.create<any>(CardStyle);

export default class Card extends React.Component<CardNativeProps, any> {
  static defaultProps = {
    style: {},
    full: false,
    styles: CardStyles,
  };

  static Header = CardHeader;
  static Body = CardBody;
  static Footer = CardFooter;

  render() {
    const { style, styles, full, children, ...restProps } = this.props;
    const cardStyle = full ? styles!.full : {};
    const childDom = React.Children.map(children, child =>
      React.cloneElement(child as React.ReactElement<any>, { styles }),
    );
    return (
      <View style={[styles!.card, cardStyle, style]} {...restProps}>
        {childDom}
      </View>
    );
  }
}
