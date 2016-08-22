export interface SearchBarProps {
  /** web only */
  prefixCls?: string;
  /** web only */
  style?: React.CSSProperties;
  /** web only */
  className?: string;
  value?: string;
  placeholder?: string;
  onSubmit?: Function;
  onChange?: Function;
  onFocus?: Function;
  onBlur?: Function;
  onCancel?: Function;
  onClear?: Function;
  showCancelButton?: boolean;
  cancelText?: string;
  disabled?: boolean;
}

export interface SearchBarState {
  value?: string;
  focus?: boolean;
}
