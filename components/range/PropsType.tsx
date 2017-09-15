export interface RangeProps {
  onChange?: (value?: number) => void;
  onAfterChange?: (value?: number) => void;
  defaultValue?: number;
  tipFormatter?: Function | null;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}

export default RangeProps;
