interface ButtonProps {
  disabled?: boolean;
  size?: 'large' | 'small';
  type?: 'primary' | 'warning' | 'ghost';
  ghost?: boolean;
  inline?: boolean;
  loading?: boolean;
  style?: {};
  onClick?: (x: any) => void;
  /** web only */
  prefixCls?: string;
  touchFeedback?: boolean;
  /** rn only */
  onPressIn?: (x: any) => void;
  onPressOut?: (x: any) => void;
  onShowUnderlay?: (x: any) => void;
  onHideUnderlay?: (x: any) => void;
}

export default ButtonProps;
