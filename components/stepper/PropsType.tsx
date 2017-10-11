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
  upStyle?: {};
  downStyle?: {};
  inputStyle?: {};
  name?: string;
}

export default StepProps;
