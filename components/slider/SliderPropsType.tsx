interface SliderProps {
  onChange?: (value: number) => void;
  onAfterChange?: (value: number) => void;
  defaultValue?: number;
  tipFormatter?: Function;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  /* web only */
  prefixCls?: string;
}

export default SliderProps;
