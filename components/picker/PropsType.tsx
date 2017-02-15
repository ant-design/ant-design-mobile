import React from 'react';
import { IPopupCascaderProps } from 'rmc-cascader/lib/Popup';
import { CascaderValue } from 'rmc-cascader/lib/CascaderTypes';

interface Props extends IPopupCascaderProps {
  data: any;
  cascade?: boolean;
  value?: Array<string|number>;
  format?: (values) => void;
  cols?: number;
  extra?: string;
  children?: any;
  /** web only */
  pickerPrefixCls?: string;
  popupPrefixCls?: string;
  onPickerChange?: (value: CascaderValue) => void;
  /**rn only**/
}

export default Props;
