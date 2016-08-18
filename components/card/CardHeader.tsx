import * as React from 'react';
import { View, Text, Image } from 'react-native';
import CardStyle from './style/index';

export interface CardHeaderProps {
  title?: any;
  thumb?: string;
  extra?: any;
  thumbStyle?: {};
  style?: any;
}

export default class CardHeader extends React.Component<CardHeaderProps, any> {
  static defaultProps = {
    thumbStyle: {},
    style: {},
  };

  render() {
    const { title, thumb, thumbStyle, extra, style } = this.props;

    const titleDom = React.isValidElement(title) ? (
      <View style={{ flex: 1 }}>{title}</View>
    ) : (
      <Text style={CardStyle.headerContent}>{title}</Text>
    );

    const extraDom = React.isValidElement(extra) ? (
      <View style={{ flex: 1 }}>{extra}</View>
    ) : (
      <Text style={[CardStyle.headerExtra]}>{extra}</Text>
    );

    return (
      <View style={[CardStyle.headerWrap, style]}>
        <View style={[CardStyle.headerTitle]}>
          { thumb ? <Image source={{ uri: thumb }} style={[CardStyle.headerImage, thumbStyle]} /> : null }
          {titleDom}
        </View>
        { extra ? extraDom : null }
      </View>
    );
  }
}
