import * as React from 'react';

interface PaginationPropTypes {
  prefixCls?: string;
  className?: string;
  mode?: 'button' | 'number' | 'pointer';
  simple?: Boolean;
  style?: React.CSSProperties;
  current: number;
  total: number;
  prevText?: string;
  nextText?: string;
  onPrev?: () => void;
  onNext?: () => void;
  onChange?: Function;
}

export default PaginationPropTypes;
