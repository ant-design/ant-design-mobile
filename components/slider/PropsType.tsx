export interface SliderPropsType {
  onChange?: (value?: number) => void;
  onAfterChange?: (value?: number) => void;
  defaultValue?: number;
  tipFormatter?: (value?: string) => React.ReactNode;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  handle?: any;
}
