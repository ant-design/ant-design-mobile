interface DatePickerProps {
  defaultDate?: any;
  value?: any;
  mode?: string;
  minDate?: any;
  maxDate?: any;
  onChange?: (x: any) => void;
  onValueChange?: (vals: any, index: number) => void;
  onScrollChange?: (newValue: any, vals: any, index: number) => void;
  locale?: any;
  minuteStep?: number;
  /** web only */
  use12Hours?: boolean;
  disabled?: boolean;
  format?: (x: any) => void;
  /** rn only */
  triggerTypes?: string;
  /** rn only */
  styles?: any;
  /** web only */
  prefixCls?: string;
  /** web only */
  className?: string;
  /** web only */
  pickerPrefixCls?: string;
}

export default DatePickerProps;
