interface BadgeProps {
  size?: 'large'|'small';
  overflowCount?: number;
  corner?: boolean;
  dot?: boolean;
  text?: string;
  style?: {};
  /** web only */
  prefixCls?: string;
  className?: string;
}

export default BadgeProps;
