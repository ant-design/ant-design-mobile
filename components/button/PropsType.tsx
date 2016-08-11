interface ButtonProps {
  /** whether button is disabled*/
  disabled?: boolean;
  size?: 'large'|'small';
  type?: 'primary'|'warning';
  ghost?: boolean;
  inline?: boolean;
  loading?: boolean;
  style?: {};
  onClick?: (x: any) => void;
  /** web only */
  prefixCls?: string;
}

export default ButtonProps;
