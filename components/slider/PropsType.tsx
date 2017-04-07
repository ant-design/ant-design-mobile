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
  /* RN only */
  maximumTrackTintColor?: string;
  minimumTrackTintColor?: string;
  /* web only */
  prefixCls?: string;
  maximumTrackStyle?: string;
  minimumTrackStyle?: number;
  handleStyle?: number;
}

export default SliderProps;
