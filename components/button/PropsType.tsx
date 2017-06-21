import { NativeProps, WebProps } from '../baseType';

export interface ButtonProps {
  type?: 'primary' | 'warning' | 'ghost';
  size?: 'large' | 'small';
  activeStyle?: boolean|Object;
  disabled?: boolean;
  onClick?: (x?: any) => void;
  loading?: boolean;
  delayPressIn?: number;
  delayPressOut?: number;
}

export interface ButtonWebProps extends WebProps, ButtonProps {
  inline?: boolean;
  across?: boolean;
  icon?: string;
  activeClassName?: string;
}

export interface ButtonNativeProps extends NativeProps, ButtonProps {
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
