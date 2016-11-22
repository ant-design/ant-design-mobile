// import React from 'react';

export interface CheckboxProps {
  style?: {};
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: Function;
  /** web only */
  prefixCls?: string;
  className?: string;
  name?: string;
  wrapLabel?: boolean;
  /** rn only**/
  styles?: any;
}

export interface CheckboxItemProps extends CheckboxProps {
  listPrefixCls?: any; // web only
  children?: any;
  extra?: any;
  onClick?: () => any;
  line?: number;
  checkboxStyle?: any; // rn only
  checkboxProps?: Object;
}

export interface AgreeItemPropsType extends CheckboxProps {
  children?: any;
  checkboxStyle?: any; // rn only
}
