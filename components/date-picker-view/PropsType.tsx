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
  use12Hours?: boolean; // web only
  disabled?: boolean;
  format?: (x: any) => void;
  triggerTypes?: string; // rn only
  styles?: any; // rn only
  prefixCls?: string; // web only
  className?: string; // web only
  pickerPrefixCls?: string; // web only
}

export default DatePickerProps;
