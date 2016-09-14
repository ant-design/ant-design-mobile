interface ButtonProps {
  /** whether button is disabled*/
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
}

export default ButtonProps;
