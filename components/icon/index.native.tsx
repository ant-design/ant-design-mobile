import React from 'react';
import { Text } from 'react-native';

const glyphMap = require('./glyph.json');

export interface IconPropType {
  type: string;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | number;
  color?: string;
}

const sizeMap = { 'xxs': 15, 'xs': 18, 'sm': 21, 'md': 22, 'lg': 36 };

export default class Icon extends React.Component<any, any> {
  static defaultProps = {
    size: 'md',
    color: '#000',
  };

  render() {
    const { size, type, color } = this.props;

    let glyph = glyphMap[type] || type;
    if (typeof glyph === 'number') {
      glyph = String.fromCharCode(glyph);
    }

    let fontSize = sizeMap[size] || size;
    if (typeof fontSize !== 'number') {
      fontSize = sizeMap[Icon.defaultProps.size];
    }

    const textStyle = {
      fontSize,
      color: color,
      fontFamily: 'anticon',
      flexDirection: 'row',
    };

    return <Text style={textStyle as any}>{glyph}</Text>;
  }
}
