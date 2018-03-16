import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { IconPropsType } from './PropsType';

const iconMap: { [key: string]: string } = {
  'check-circle': '\ue630',
  check: '\ue632',
  'check-circle-o': '\ue631',
  'cross-circle': '\ue62e',
  cross: '\ue633',
  'cross-circle-o': '\ue62f',
  up: '\ue61e',
  down: '\ue61d',
  left: '\ue620',
  right: '\ue61f',
  ellipsis: '\ue647',
  loading: '\ue64d',
};
export interface IconProps extends IconPropsType {
  style?: StyleProp<ViewStyle>;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | number;
}
export default class Icon extends React.Component<IconProps, any> {
  static defaultProps = {
    size: 'md',
    color: '#000',
  };

  render() {
    const { size, type, color } = this.props;
    const sizeMap: { [key: string]: number } = {
      xxs: 15,
      xs: 18,
      sm: 21,
      md: 22,
      lg: 36,
    };
    const fontSize = typeof size === 'string' ? sizeMap[size] : size;
    const TextIconStyle = {
      fontSize,
      color,
      fontFamily: 'anticon',
      flexDirection: 'row',
    };
    return <Text style={TextIconStyle as any}>{iconMap[type] || type}</Text>;
  }
}
