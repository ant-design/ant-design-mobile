interface DatePickerProps {
  defaultDate: any;
  value?: any;
  format?: (x: any) => void;
  cols?: number;
  mode?: string;
  extra?: string;
  children?: any;
  minDate?: any;
  maxDate?: any;
  /** rn only */
  triggerTypes?: string;
  /** web only */
  prefixCls?: string;
  pickerPrefixCls?: string;
  popupPrefixCls?: string;
}

export default DatePickerProps;
