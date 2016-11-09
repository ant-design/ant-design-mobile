import React from 'react';

interface ProgressProps {
  percent?: number;
  position?: 'fixed' | 'normal';
  unfilled?: 'show' | 'hide';
  style?: React.CSSProperties;
  /** web only */
  prefixCls?: string;
}

export default ProgressProps;
