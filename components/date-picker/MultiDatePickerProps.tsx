export interface IPickerCol {
  key?: string;
  props?: any;
}

interface IMultiPickerProps {
  mode?: string;
  prefixCls?: string;
  value?: any;
  pickerPrefixCls?: string;
  cols?: IPickerCol[];
  selectedValue?: any[];
  disabled?: boolean;
  pure?: boolean;
  className?: string;
  startTime?: any;
  endTime?: any;
  defaultDate?: any;
  locale?: any;
  minStartDate?: any;
  maxStartDate?: any;
  minEndDate?: any;
  maxEndDate?: any;
  minuteStep?: number;
  pickerItemStyle?: any;
  rootNativeProps?: any;
  indicatorStyle?: any;
  onValueChange?: (v?: any, i?: number|undefined) => void;
}

export default IMultiPickerProps;
