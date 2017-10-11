import React from 'react';

interface InputItemProps {
  style?: any;
  /** web only */
  moneyKeyboardAlign?: string;
  onClick?: Function;
  type?: 'text' | 'bankCard' | 'phone' | 'password' | 'number' | 'idcard' | 'digit' | 'money';
  editable?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  clear?: boolean;
  maxLength?: number;
  onChange?: Function;
  onBlur?: Function;
  onFocus?: Function;
  extra?: React.ReactNode;
  onExtraClick?: (e?) => void;
  onExtraPress?: Function;
  error?: boolean;
  onErrorClick?: (e?) => void;
  onErrorPress?: Function;
  size?: 'large' | 'small';
  labelNumber?: number;
  labelPosition?: 'left' | 'top';
  textAlign?: 'left' | 'center';
  children?: any;
  updatePlaceholder?: boolean;
  styles?: any;
  autoFocus?: boolean;
  focused?: boolean;
  locale?: object;
}

export default InputItemProps;
