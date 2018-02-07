/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { CardHeaderPropsType } from './PropsType';

export interface CardHeaderProps extends CardHeaderPropsType {
  styles?: any;
  style?: StyleProp<ViewStyle>;
  thumbStyle?: StyleProp<ImageStyle>;
}

export default class CardHeader extends React.Component<CardHeaderProps, any> {
  static defaultProps = {
    thumbStyle: {},
    style: {},
  };

  render() {
    const {
      title,
      thumb,
      thumbStyle,
      extra,
      style,
      styles,
      ...restProps,
    } = this.props;

    const titleDom =
      title === undefined ? null : React.isValidElement(title) ? (
        <View style={{ flex: 1 }}>{title}</View>
      ) : (
        <Text style={styles.headerContent}>{title}</Text>
      );

    const extraDom =
      extra === undefined ? null : React.isValidElement(extra) ? (
        <View style={{ flex: 1 }}>{extra}</View>
      ) : (
        <Text style={[styles.headerExtra]}>{extra}</Text>
      );

    return (
      <View style={[styles.headerWrap, style]} {...restProps}>
        <View style={[styles.headerTitle]}>
          {typeof thumb === 'string' ? (
            <Image
              source={{ uri: thumb }}
              style={[styles.headerImage, thumbStyle]}
            />
          ) : (
            thumb
          )}
          {titleDom}
        </View>
        {extra ? extraDom : null}
      </View>
    );
  }
}
