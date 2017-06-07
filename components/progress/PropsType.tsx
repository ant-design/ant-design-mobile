interface ProgressProps {
  percent?: number;
  position?: 'fixed' | 'normal';
  unfilled?: 'show' | 'hide';
  style?: any;
  wrapStyle?: any;
  /** rn only */
  wrapWidth?: number;
  styles?: any;
  /** web only */
  prefixCls?: string;
  className?: string;
  appearTransition?: boolean;
}

export default ProgressProps;
