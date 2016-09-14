import * as React from 'react';

export interface WingBlankProps {
  size?: 'sm'|'md'|'lg';
  style?: React.CSSProperties;
  /** web only */
  prefixCls?: string;
  /** web only */
  className?: string;
}

export default WingBlankProps;
