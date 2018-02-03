import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { CardFooterPropsType } from './PropsType';

export interface CardFooterProps extends CardFooterPropsType {
  styles?: any;
  style?: StyleProp<ViewStyle>;
}

export default class CardFooter extends React.Component<CardFooterProps, any> {
  static defaultProps = {
    style: {},
  };

  render() {
    const { content, extra, styles, style, ...restProps } = this.props;

    const contentDom =
      content !== undefined && React.isValidElement(content) ? (
        <View style={{ flex: 1 }}>{content}</View>
      ) : (
        <Text style={styles.footerContent}>{content}</Text>
      );

    const extraDom =
      extra !== undefined && React.isValidElement(extra) ? (
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
