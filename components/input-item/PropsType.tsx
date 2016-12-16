import React from 'react';

interface InputItemProps {
  /** web only */
  prefixCls?: string;
  /** web only */
  prefixListCls?: string;
  style?: React.CSSProperties;
  /** web only */
  className?: string;
  type?: 'text'|'bankCard'|'phone'|'password'|'number'|'idcard'|'digit';
  editable?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder: string;
  clear?: boolean;
  maxLength?: number;
  onChange?: Function;
  onBlur?: Function;
  onFocus?: Function;
  extra?: React.ReactNode;
  onExtraClick?: Function;
  onExtraPress?: Function;
  error?: boolean;
  onErrorClick?: Function;
  onErrorPress?: Function;
  size?: 'large'|'small';
  labelNumber?: number;
  labelPosition?: 'left'|'top';
  textAlign?: 'left'|'center';
  /** rn only */
  last?: boolean;
  children?: any;
  updatePlaceholder?: boolean;
  styles?: any;
  autoFocus?: boolean;
  focused?: boolean;
}

export default InputItemProps;
