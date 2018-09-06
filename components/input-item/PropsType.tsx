import React from 'react';
export type InputEventHandler = (value?: string) => void;

export interface InputItemPropsType {
  moneyKeyboardAlign?: string;
  moneyKeyboardWrapProps?: object;
  moneyKeyboardHeader?: React.ReactNode;
  type?:
    | 'text'
    | 'bankCard'
    | 'phone'
    | 'password'
    | 'number'
    | 'digit'
    | 'money';
  editable?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  clear?: boolean;
  maxLength?: number;
  extra?: React.ReactNode;
  error?: boolean;
  // can not find out where it used
  // onErrorPress?: Function;
  // size?: 'large' | 'small';
  labelNumber?: number;
  labelPosition?: 'left' | 'top';
  textAlign?: 'left' | 'center';
  updatePlaceholder?: boolean;
  locale?: object;
  onChange?: (value: string) => void;
  onFocus?: InputEventHandler;
  onBlur?: InputEventHandler;
  onVirtualKeyboardConfirm?: InputEventHandler;
}
