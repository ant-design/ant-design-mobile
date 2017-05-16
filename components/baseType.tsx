import React from 'react';
import { ViewStyle } from 'react-native';

export interface NativeProps {
  style?: ViewStyle;
}

export interface WebProps {
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;

  role?: string;
}
