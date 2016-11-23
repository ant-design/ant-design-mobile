import React from 'react';

export interface RadioProps {
  style?: React.CSSProperties;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: Function;
  /** web only */
  prefixCls?: string;
  listPrefixCls?: string;
  className?: string;
  name?: string;
  wrapLabel?: boolean;
  /** rn only**/
  styles?: any;
}

export interface RadioItemProps extends RadioProps {
  radioStyle?: any; // rn only
  radioProps?: Object;
}
