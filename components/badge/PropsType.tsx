interface BadgeProps {
  size?: 'large'|'small';
  overflowCount?: number;
  corner?: boolean;
  dot?: boolean;
  text?: any;
  style?: {};
  /** rn only */
  styles?: any;
  /** web only */
  prefixCls?: string;
  className?: string;
  hot?: boolean;
}

export default BadgeProps;
