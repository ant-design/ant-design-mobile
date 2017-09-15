export interface SliderProps {
  onChange?: (value?: number) => void;
  onAfterChange?: (value?: number) => void;
  defaultValue?: number;
  tipFormatter?: Function | null;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  handle?: any;
}

export default SliderProps;
