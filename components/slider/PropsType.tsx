import React from 'react';

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
  handle?: any;
  maximumTrackStyle?: React.CSSProperties;
  minimumTrackStyle?: React.CSSProperties;
  handleStyle?: React.CSSProperties;
  trackStyle?: React.CSSProperties;
  railStyle?: React.CSSProperties;
}

export default SliderProps;
