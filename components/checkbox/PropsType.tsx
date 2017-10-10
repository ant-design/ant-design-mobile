// import React from 'react';

export interface CheckboxProps {
  style?: {};
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: Function;
}

export interface CheckboxItemProps extends CheckboxProps {
  children?: any;
  extra?: any;
  onClick?: () => any;
  checkboxProps?: Object;
  prefixCls?: string;
}

export interface AgreeItemPropsType extends CheckboxProps {
  children?: any;
  prefixCls?: string;
}
