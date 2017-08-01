import React from 'react';

interface DatePickerProps {
  defaultDate?: any;
  value?: any;
  mode?: string;
  minDate?: any;
  maxDate?: any;
  onChange?: (x: any) => void;
  format?: (x: any) => void;
  locale?: any;
  minuteStep?: number;
  use12Hours?: boolean; // web only
  disabled?: boolean;
  extra?: string;
  children?: any;
  triggerTypes?: string; // rn only
  styles?: any; // rn only
  prefixCls?: string; // web only
  className?: string; // web only
  pickerPrefixCls?: string; // web only
  popupPrefixCls?: string; // web only
  dismissText?: string | React.ReactElement<any>; // React.ReactElement only for web
  okText?: string | React.ReactElement<any>; // React.ReactElement only for web
}

export default DatePickerProps;
