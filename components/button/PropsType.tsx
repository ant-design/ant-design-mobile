interface ButtonProps {
  type?: 'primary' | 'warning' | 'ghost';
  size?: 'large' | 'small';
  inline?: boolean;
  across?: boolean;
  disabled?: boolean;
  loading?: boolean;
  style?: {};
  onClick?: (x: any) => void;
  /** web only */
  prefixCls?: string;
  activeStyle?: any;
  icon?: any;
  /** rn only */
  onPressIn?: (x: any) => void;
  onPressOut?: (x: any) => void;
  onShowUnderlay?: (x: any) => void;
  onHideUnderlay?: (x: any) => void;
  styles?: any;
}

export default ButtonProps;
