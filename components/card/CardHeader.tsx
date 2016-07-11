import { PropTypes } from 'react';
import * as React from 'react';
import { View, Text, Image } from 'react-native';
import splitObject from '../_util/splitObject';
import CardStyle from './style/index';

const Header = CardStyle.Header;

export interface CardHeaderProps {
  title?:any;
  thumb?:string;
  extra?:any;
  thumbStyle?:{};
}

export default class CardHeader extends React.Component <CardHeaderProps, any> {
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
      <Text style={Header.content}>{title}</Text>
    );

    return (
      <View {...restProps} style={[Header.header, style]}>
        <View style={Header.title}>
          { thumb ? <Image source={{uri: thumb}} style={[Header.image, thumbStyle]} /> : null }
          {titleDom}
        </View>
        { extra ? <View style={Header.extra}>{extra}</View> : null }
      </View>
    );
  }
}
