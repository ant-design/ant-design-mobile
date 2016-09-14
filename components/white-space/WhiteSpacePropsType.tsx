import * as React from 'react';

export interface WhiteSpaceProps {
  size?: 'xs'|'sm'|'md'|'lg'|'xl';
  onClick?: () => void;
  /** web only */
  prefixCls?: string;
  /** web only */
  style?: React.CSSProperties;
  /** web only */
  className?: string;
}

export default WhiteSpaceProps;
