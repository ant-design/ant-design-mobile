import * as React from 'react';
import { View } from 'react-native';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import CardStyle from './style/index';

export interface CardProps {
  style?:{};
}

export default class Card extends React.Component<CardProps, any> {
  static defaultProps = {
    style: {},
  };

  render() {
    return (
      <View {...this.props} style={[CardStyle.Card, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
