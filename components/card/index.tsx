import React from 'react';
import { View } from 'react-native';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import CardStyle from './style/index';

export interface CardProps {
  style?: {};
  full?: boolean;
  styles?: any;
}

export default class Card extends React.Component<CardProps, any> {
  static defaultProps = {
    style: {},
    full: false,
    styles: CardStyle,
  };

  static Header = CardHeader;
  static Body = CardBody;
  static Footer = CardFooter;

  render() {
    const styles = this.props.styles;
    const cardStyle = this.props.full ? styles.full : {};
    const childDom = React.Children.map(this.props.children, (child) => React.cloneElement(
        child as React.ReactElement<any>, { styles },
      ),
    );
    return (
      <View style={[styles.card, cardStyle, this.props.style]}>
        {childDom}
      </View>
    );
  }
}
