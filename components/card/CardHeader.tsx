import { PropTypes } from 'react';
import * as React from 'react';
import { View, Text, Image } from 'react-native';
import splitObject from '../_util/splitObject';
import CardStyle from './style/index';

export interface CardHeaderProps {
  title?: any;
  thumb?: string;
  extra?: any;
  thumbStyle?: {};
}

export default class CardHeader extends React.Component<CardHeaderProps, any> {
  static propTypes = {
    title: PropTypes.node,
    thumb: PropTypes.string,
    thumbStyle: PropTypes.object,
    extra: PropTypes.node,
  };

  static defaultProps = {
    thumbStyle: {},
    style: {},
  };

  render() {
    let [{title, thumb, thumbStyle, extra, style}, restProps] = splitObject(
      this.props, ['title', 'thumb', 'thumbStyle', 'extra', 'style']
    );

    const titleDom = React.isValidElement(title) ? (
      <View style={{ flex: 1 }}>{title}</View>
    ) : (
      <Text style={CardStyle.headerContent}>{title}</Text>
    );

    return (
      <View {...restProps} style={[CardStyle.headerWrap, style]}>
        <View style={[CardStyle.headerTitle]}>
          { thumb ? <Image source={{uri: thumb}} style={[CardStyle.headerImage, thumbStyle]} /> : null }
          {titleDom}
        </View>
        { extra ? <View style={CardStyle.headerExtra}>{extra}</View> : null }
      </View>
    );
  }
}
