import React from 'react';
import { View, Text } from 'react-native';
import { CardFooterProps } from './PropsType';

export default class CardFooter extends React.Component<CardFooterProps, any> {
  static defaultProps = {
    style: {},
  };

  render() {
    const { content, extra, styles, style, ...restProps } = this.props;

    const contentDom = React.isValidElement(content) ? (
      <View style={{ flex: 1 }}>{content}</View>
    ) : (
      <Text style={styles.footerContent}>{content}</Text>
    );

    const extraDom = React.isValidElement(extra) ? (
      <View style={{ flex: 1 }}>{extra}</View>
    ) : (
      <Text style={[styles.footerExtra]}>{extra}</Text>
    );

    return (
      <View style={[styles.footerWrap, style]} {...restProps}>
        {contentDom}
        {extra ? extraDom : null}
      </View>
    );
  }
}
