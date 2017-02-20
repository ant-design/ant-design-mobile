import React from 'react';
import { CascaderValue } from 'rmc-cascader/lib/CascaderTypes';
import { IPopupPickerProps } from 'rmc-picker/lib/PopupPickerTypes';

//Partial IPopupCascaderProps
export interface IPartialPopupCascaderProps extends IPopupPickerProps {
    cascader?: React.ReactElement<ICascaderProps>;
    onChange?: (date?: CascaderValue) => void;
}

interface Props extends IPartialPopupCascaderProps {
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
