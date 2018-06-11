import { DatePickerPropsType } from '../date-picker/PropsType';

export interface DatePickerProps extends DatePickerPropsType {
  onScrollChange?: (newValue: any, vals: any, index: number) => void;
  prefixCls?: string;
  className?: string;
  pickerPrefixCls?: string;
}
