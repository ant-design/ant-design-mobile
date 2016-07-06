import React, { PropTypes } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import splitObject from '../_util/splitObject';
import CardStyle from './style/index';

const Header = CardStyle.Header;

export default class CardHeader extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    thumb: PropTypes.string,
    thumbStyle: PropTypes.object,
    extra: PropTypes.node,
  };

  render() {
    let [{title, thumb, thumbStyle, extra, style}, restProps] = splitObject(
      this.props, ['title', 'thumb', 'thumbStyle', 'extra', 'style']
    );

    return (
      <View {...restProps} style={[Header.header, style]}>
        <View style={Header.title}>
          { thumb ? <Image source={{uri: thumb}} style={[Header.image, thumbStyle]} /> : null }
          <Text style={Header.content}>{title}</Text>
        </View>
        { extra ? <View style={Header.extra}>{extra}</View> : null }
      </View>
    );
  }
}
