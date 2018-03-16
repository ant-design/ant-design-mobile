export interface StepPropsType {
  min?: number;
  max?: number;
  step?: number | string;
  readOnly?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  value?: number;
  defaultValue?: number;
  onChange?: (value: any) => void;
  upStyle?: {};
  downStyle?: {};
  inputStyle?: {};
  name?: string;
}
