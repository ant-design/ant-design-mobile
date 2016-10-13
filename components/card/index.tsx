import React from 'react';
import { View } from 'react-native';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import CardStyle from './style/index';

export interface CardProps {
  style?: {};
  full?: boolean;
}

export default class Card extends React.Component<CardProps, any> {
  static defaultProps = {
    style: {},
    full: false,
  };

  static Header = CardHeader;
  static Body = CardBody;
  static Footer = CardFooter;

  render() {
    const cardStyle = this.props.full ? CardStyle.full : {};
    return (
      <View {...this.props} style={[CardStyle.card, cardStyle, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}
