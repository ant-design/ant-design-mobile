import React from 'react';

interface DatePickerProps {
  type?: string;
  defaultDate?: any;
  value?: any;
  onPickerChange?: (x?: any) => void;
  onOk?: (x?: any) => void;
  onChange?: (x: any) => void;
  format?: (x: any) => void;
  cols?: number;
  mode?: string;
  extra?: string;
  children?: any;
  minDate?: any;
  maxDate?: any;
  minStartDate?: any;
  maxStartDate?: any;
  minEndDate?: any;
  maxEndDate?: any;
  split?: string;
  locale?: any;
  disabled?: boolean;
  minuteStep?: number;
  /** rn only */
  triggerTypes?: string;
  styles?: any;
  /** web only */
  prefixCls?: string;
  className?: string;
  pickerPrefixCls?: string;
  popupPrefixCls?: string;
  dismissText?: string|React.ReactElement<any>; // React.ReactElement only for web
  okText?: string|React.ReactElement<any>; // React.ReactElement only for web
  startLabelText?: string|React.ReactElement<any>; // React.ReactElement only for web
  endLabelText?: string|React.ReactElement<any>; // React.ReactElement only for web
}

export default DatePickerProps;
