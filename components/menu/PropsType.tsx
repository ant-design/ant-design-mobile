import React from 'react';

export interface DataItem {
  label?: any;
  value?: any;
  children?: any;
  isLeaf?: boolean;
  disabled?: boolean;
  [key: string]: any;
}

export interface MenuProps {
  /** web only */
  prefixCls?: string;
  subMenuPrefixCls?: string;
  radioPrefixCls?: string;
  multiSelectMenuBtnsCls?: string;
  MenuSelectContanerPrefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  data?: Array<DataItem>;
  defaultValue?: Array<string>;
  value?: Array<string>;
  onChange?: Function;
  onOk?: Function;
  onCancel?: Function;
  level?: 1 | 2;
  height?: number;
  multiSelect?: boolean;
}
