import React from 'react';
import { View, StyleSheet } from 'react-native';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import CardStyle, { ICardStyle } from './style/index';
import { CardProps } from './PropsType';

export interface ICardNativeProps extends CardProps {
  styles?: ICardStyle;
}

const CardStyles = StyleSheet.create<any>(CardStyle);

export default class Card extends React.Component<ICardNativeProps, any> {
  static defaultProps = {
    style: {},
    full: false,
    styles: CardStyles,
  };

  static Header = CardHeader;
  static Body = CardBody;
  static Footer = CardFooter;

  render() {
    const { style , styles, full, children, ...restProps } = this.props;
    const cardStyle = full ? styles!.full : {};
    const childDom = React.Children.map(children, (child) => React.cloneElement(
        child as React.ReactElement<any>, { styles },
      ),
    );
    return (
      <View style={[styles!.card, cardStyle, style]} {...restProps}>
        {childDom}
      </View>
    );
  }
}
