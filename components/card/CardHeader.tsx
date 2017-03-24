import React from 'react';
import { View, Text, Image } from 'react-native';

export interface CardHeaderProps {
  title?: any;
  thumb?: string;
  extra?: any;
  thumbStyle?: {};
  style?: any;
  styles: any;
}

export default class CardHeader extends React.Component<CardHeaderProps, any> {
  static defaultProps = {
    thumbStyle: {},
    style: {},
  };

  render() {
    const { title, thumb, thumbStyle, extra, style, styles, ...restProps } = this.props;

    const titleDom = React.isValidElement(title) ? (
      <View style={{ flex: 1 }}>{title}</View>
    ) : (
      <Text style={styles.headerContent}>{title}</Text>
    );

    const extraDom = React.isValidElement(extra) ? (
      <View style={{ flex: 1 }}>{extra}</View>
    ) : (
      <Text style={[styles.headerExtra]}>{extra}</Text>
    );

    return (
      <View style={[styles.headerWrap, style]} {...restProps}>
        <View style={[styles.headerTitle]}>
          {thumb ? <Image source={{ uri: thumb }} style={[styles.headerImage, thumbStyle]} /> : null}
          {titleDom}
        </View>
        {extra ? extraDom : null}
      </View>
    );
  }
}
