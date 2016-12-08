import React from 'react';

interface SegmentedControlProps {
  tintColor?: string;
  disabled?: boolean;
  selectedIndex?: number;
  values?: Array<string>;
  onChange?: (e: React.NativeSyntheticEvent<any> | React.SyntheticEvent<any>) => void;
  onValueChange?: (value: string) => void;
  style?: any;
  /* web only */
  prefixCls?: string;
  className?: string;
  touchFeedback?: boolean;
  /* rn android only */
  styles?: any;
}

export default SegmentedControlProps;
