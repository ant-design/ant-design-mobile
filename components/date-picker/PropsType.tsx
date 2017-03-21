import React from 'react';

interface DatePickerProps {
  defaultDate?: any;
  value?: any;
  onChange?: (x: any) => void;
  format?: (x: any) => void;
  cols?: number;
  mode?: string;
  extra?: string;
  children?: any;
  minDate?: any;
  maxDate?: any;
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
}

export default DatePickerProps;
