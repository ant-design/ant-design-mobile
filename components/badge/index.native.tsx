import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BadgeStyle, { IBadgeStyle } from './style/index';
import BadgeProps from './PropsType';

export interface IBadgeNativeProps extends BadgeProps {
  styles?: IBadgeStyle;
}

const BadgeStyles = StyleSheet.create<any>(BadgeStyle);

export default class Badge extends React.Component<IBadgeNativeProps, any> {
  static defaultProps = {
    size: 'small',
    overflowCount: 99,
    dot: false,
    corner: false,
    styles: BadgeStyles,
  };

  render() {
    let {
      styles, style,
      children, text, size, overflowCount, dot, corner, ...restProps, // todo: hot
    } = this.props;
    styles = styles!;
    text = typeof text === 'number' && text > (overflowCount as number) ? `${overflowCount}+` : text;

    // dot mode don't need text
    if (dot) {
      text = '';
    }

    const badgeCls = corner ? 'textCorner' : 'textDom';
    const contentDom = !dot ? (
      <View {...restProps} style={[styles[badgeCls], styles[`${badgeCls}${size}`]]}>
        <Text style={[styles.text]}>{text}</Text>
      </View>
    ) : <View {...restProps} style={[styles.dot, styles[`dotSize${size}`]]} />;

    return (
      <View style={[ styles.wrap, style ]}>
        <View style={[styles[`${badgeCls}Wrap`]]}>
          {children}
          {(text || dot) ? contentDom : null}
        </View>
      </View>
    );
  }
}
