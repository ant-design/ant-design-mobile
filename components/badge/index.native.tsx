import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { BadgePropsTypes } from './PropsType';
import BadgeStyle, { IBadgeStyle } from './style/index.native';

export interface BadgeNativeProps extends BadgePropsTypes {
  styles?: IBadgeStyle;
  style?: StyleProp<ViewStyle>;
}

const BadgeStyles = StyleSheet.create<any>(BadgeStyle);

export default class Badge extends React.Component<BadgeNativeProps, any> {
  static defaultProps = {
    size: 'small',
    overflowCount: 99,
    dot: false,
    corner: false,
    styles: BadgeStyles,
  };

  render() {
    // tslint:disable:prefer-const
    let {
      styles,
      style,
      children,
      text,
      size,
      overflowCount,
      dot,
      corner,
      ...restProps, // todo: hot
    } = this.props;
    styles = styles!;
    text =
      typeof text === 'number' && text > (overflowCount as number)
        ? `${overflowCount}+`
        : text;

    // dot mode don't need text
    if (dot) {
      text = '';
    }
    // fake styles
    const fakeStyles = (styles as any) as { [key: string]: ViewStyle };
    const badgeCls = corner ? 'textCorner' : 'textDom';
    const contentDom = !dot ? (
      <View
        {...restProps}
        style={[styles[badgeCls], fakeStyles[`${badgeCls}${size}`]]}
      >
        <Text style={[styles.text]}>{text}</Text>
      </View>
    ) : (
      <View {...restProps} style={[styles.dot, fakeStyles[`dotSize${size}`]]} />
    );

    return (
      <View style={[styles.wrap, style]}>
        <View style={[fakeStyles[`${badgeCls}Wrap`]]}>
          {children}
          {text || dot ? contentDom : null}
        </View>
      </View>
    );
  }
}
