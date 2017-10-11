import React from 'react';

interface DatePickerProps {
  defaultDate?: any;
  value?: any;
  mode?: string;
  minDate?: any;
  maxDate?: any;
  onChange?: (x: any) => void;
  onValueChange?: (vals: any, index: number) => void;
  locale?: any;
  minuteStep?: number;
  disabled?: boolean;
  format?: (x: any) => void;
  extra?: string;
  children?: any;
  /** React.ReactElement only for web */
  dismissText?: string | React.ReactElement<any>;
  /** React.ReactElement only for web */
  okText?: string | React.ReactElement<any>;
}

export default DatePickerProps;
