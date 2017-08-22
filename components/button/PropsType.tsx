import React from 'react';

export interface ButtonProps {
  type?: 'primary' | 'warning' | 'ghost';
  size?: 'large' | 'small';
  activeStyle?: boolean|Object;
  disabled?: boolean;
  onClick?: (x?: any) => void;
  loading?: boolean;
  delayPressIn?: number;
  delayPressOut?: number;
  style?: React.CSSProperties;
  /* for web */
  prefixCls?: string;
  className?: string;
  role?: string;
  inline?: boolean;
  icon?: string;
  activeClassName?: string;
  /* for native */
  onPressIn?: (x?: any) => void;
  onPressOut?: (x?: any) => void;
  onShowUnderlay?: (x?: any) => void;
  onHideUnderlay?: (x?: any) => void;
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
