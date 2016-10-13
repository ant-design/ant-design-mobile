import React from 'react';
import { View, Text } from 'react-native';
import CardStyle from './style/index';

export interface CardFooterProps {
  content?: any;
  extra?: any;
  style?: {};
}

export default class CardFooter extends React.Component<CardFooterProps, any> {
  static defaultProps = {
    style: {},
  };

  render() {
    const { content, extra, style } = this.props;

    const contentDom = React.isValidElement(content) ? (
      <View style={{ flex: 1 }}>{content}</View>
    ) : (
      <Text style={CardStyle.footerContent}>{content}</Text>
    );

    const extraDom = React.isValidElement(extra) ? (
      <View style={{ flex: 1 }}>{content}</View>
    ) : (
      <Text style={[CardStyle.footerExtra]}>{extra}</Text>
    );

    return (
      <View style={[CardStyle.footerWrap, style]}>
        {contentDom}
        {
          extra ? extraDom : null
        }
      </View>
    );
  }
}
