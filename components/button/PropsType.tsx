import React from 'react';

export interface ButtonProps {
  type?: 'primary' | 'warning' | 'ghost';
  size?: 'large' | 'small';
  activeStyle?: boolean | Object;
  disabled?: boolean;
  onClick?: (x?: any) => void;
  loading?: boolean;
  delayPressIn?: number;
  delayPressOut?: number;
  style?: React.CSSProperties;
  styles?: {
    primaryRawText?: {},
    warningRawText?: {},
    ghostRawText?: {},
    largeRawText?: {},
    smallRawText?: {},
    disabledRawText?: {},
    wrapperStyle?: {},
    disabledRaw?: {},
    container?: {},
    indicator?: {},
  };
}
