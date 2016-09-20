import React from 'react';

export interface ListProps {
  /** web only */
  prefixCls?: string;
  style?: React.CSSProperties;
  /** web only */
  className?: string;
  children?: any;
  renderHeader?: Function;
  renderFooter?: Function;
}
