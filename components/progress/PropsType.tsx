import React from 'react';

interface ProgressProps {
  percent?: number;
  position?: 'fixed' | 'normal';
  unfilled?: 'show' | 'hide';
  style?: React.CSSProperties;
  /** rn only */
  wrapWidth?: number;
  styles?: any;
  /** web only */
  prefixCls?: string;
  appearTransition?: boolean;
}

export default ProgressProps;
