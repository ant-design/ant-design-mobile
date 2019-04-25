import * as React from 'react';

export interface DataItem {
  label?: React.ReactNode;
  value?: any;
  isLeaf?: boolean;
  disabled?: boolean;
  [key: string]: any;
}

export type ValueType = Array<string | string[]>;

export interface MenuProps {
  prefixCls?: string;
  subMenuPrefixCls?: string;
  radioPrefixCls?: string;
  multiSelectMenuBtnsCls?: string;
  MenuSelectContanerPrefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  data?: DataItem[];
  defaultValue?: ValueType;
  value?: ValueType;
  onChange?: (value?: ValueType) => void;
  onOk?: (value?: ValueType) => void;
  onCancel?: () => void;
  level?: 1 | 2;
  height?: number;
  multiSelect?: boolean;
}
