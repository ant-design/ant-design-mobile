import { DatePickerPropsType } from '../date-picker/PropsType';

export interface DatePickerProps extends DatePickerPropsType {
  onScrollChange?: (newValue: any, vals: any, index: number) => void;
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
