interface StepProps {
  min?: number;
  max?: number;
  step?: number | string;
  readOnly?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  value?: number;
  defaultValue?: number;
  onChange?: (value) => void;
  style?: {};
  /* react-native only */
  styles?: any;
  upStyle?: {};
  downStyle?: {};
  inputStyle?: {};
  /* web only */
  prefixCls?: string;
  name?: string;
  showNumber?: boolean;
  className?: string;
}

export default StepProps;
