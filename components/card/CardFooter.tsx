import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import splitObject from '../_util/splitObject';
import CardStyle from './style/index';

const Footer = CardStyle.Footer;

export default class CardFooter extends React.Component {
  static propTypes = {
    content: PropTypes.string,
    extra: PropTypes.string,
  };

  static defaultProps = {
    style: {},
  };

  render() {
    let [{content, extra, style}, restProps] = splitObject(
      this.props, ['content', 'extra', style]
    );

    return (
      <View {...restProps} style={[Footer.footer, style]}>
        <Text style={Footer.content}>{content}</Text>
        {
          extra ? (
            <Text style={Footer.extra}>{extra}</Text>
          ) : null
        }
      </View>
    );
  }
}
