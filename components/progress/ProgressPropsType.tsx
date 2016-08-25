interface ProgressProps {
  percent?: number;
  position?: 'fixed' | 'normal';
  unfilled?: 'show' | 'hide';
  /** web only */
  prefixCls?: string;
}

export default ProgressProps;
