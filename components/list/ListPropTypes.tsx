import * as React from 'react';

export interface ListProps {
  /** web only */
  prefixCls?: string;
  style?: React.CSSProperties;
  /** web only */
  className?: string;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children?: any;
}

export default ListProps;
