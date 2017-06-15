import React from 'react';

export interface NativeProps {
  style?: {} | Array<{}>;
}

export interface WebProps {
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;

  role?: string;
}
