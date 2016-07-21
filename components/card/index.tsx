import * as React from 'react';
import { View } from 'react-native';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import CardStyle from './style/index';

export interface CardProps {
  style?: {};
}

export default class Card extends React.Component<CardProps, any> {
  static defaultProps = {
    style: {},
  };

  static Header = CardHeader;
  static Body = CardBody;
  static Footer = CardFooter;

  render() {
    return (
      <View {...this.props} style={[CardStyle.card, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}
