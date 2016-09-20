import React from 'react';

export interface DataItem {
  label?: any;
  value?: any;
  children?: any;
  isLeaf?: boolean;
  [key: string]: any;
}

export interface SubDataItem {
  label?: string;
  value?: any;
  disabled?: boolean;
  [key: string]: any;
}

export interface MenuProps {
  /** web only */
  prefixCls?: string;
  /** web only */
  className?: string;
  style?: React.CSSProperties;
  data?: Array<DataItem>;
  value?: Array<string>;
  onChange?: Function;
  level?: number;
  height?: number;
}

export interface MenuState {
  SubMenuData: Array<SubDataItem>;
  firstValue?: any;
}

export interface SubMenuProps {
  /** web only */
  prefixCls?: string;
  /** web only */
  radioPrefixCls?: string;
  /** web only */
  className?: string;
  style?: React.CSSProperties;
  value?: Array<SubDataItem>;
  data?: Array<SubDataItem>;
  onChange?: Function;
}

export interface SubMenuState {
  value?: Array<SubDataItem>;
  data?: Array<SubDataItem>;
}
