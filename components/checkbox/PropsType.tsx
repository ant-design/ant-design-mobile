// import React from 'react';

export interface CheckboxProps {
  /** web only */
  prefixCls?: string;
  /** web only */
  className?: string;
  /** web only */
  name?: string;
  style?: {};
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: Function;
}

export interface CheckboxItemProps extends CheckboxProps {
  listPrefixCls?: any; // web only
  children?: any;
  extra?: any;
  onClick?: () => any;
  line?: number;
  checkboxStyle?: any; // rn only
}

export interface AgreeItemPropsType extends CheckboxProps {
  children?: any;
  checkboxStyle?: any; // rn only
}
