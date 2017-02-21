import React from 'react';
import { CascaderValue } from 'rmc-cascader/lib/CascaderTypes';
import { IPopupPickerProps } from 'rmc-picker/lib/PopupPickerTypes';

interface Props extends IPopupPickerProps {
  data: any;
  cascade?: boolean;
  value?: Array<string|number>;
  format?: (values) => void;
  cols?: number;
  extra?: string;
  children?: any;
  onChange?: (date?: CascaderValue) => void;
  /** web only */
  pickerPrefixCls?: string;
  popupPrefixCls?: string;
  onPickerChange?: (value: CascaderValue) => void;
  /**rn only**/
}

export default Props;
