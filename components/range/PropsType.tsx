export interface RangePropsType {
  onChange?: (value?: number) => void;
  onAfterChange?: (value?: number) => void;
  defaultValue?: number;
  tipFormatter?: ((value?: number) => React.ReactNode);
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}
