import { PropTypes } from 'react';
import * as React from 'react';
import { View, Text } from 'react-native';
import splitObject from '../_util/splitObject';
import CardStyle from './style/index';

export interface CardFooterProps {
  content?: any;
  extra?: any;
  style?: {};
}

export default class CardFooter extends React.Component<CardFooterProps, any> {
  static propTypes = {
    content: PropTypes.node,
    extra: PropTypes.node,
  };

  static defaultProps = {
    style: {},
  };

  render() {
    let [{content, extra, style}, restProps] = splitObject(
      this.props, ['content', 'extra', 'style']
    );

    const contentDom = React.isValidElement(content) ? (
      <View style={{ flex: 1 }}>{content}</View>
    ) : (
      <Text style={CardStyle.footerContent}>{content}</Text>
    );

    const extraDom = React.isValidElement(extra) ? (
      <View style={{ flex: 1 }}>{content}</View>
    ) : (
      <Text style={CardStyle.footerExtra}>{extra}</Text>
    );

    return (
      <View {...restProps} style={[CardStyle.footerWrap, style]}>
        {contentDom}
        {
          extra ? extraDom : null
        }
      </View>
    );
  }
}
