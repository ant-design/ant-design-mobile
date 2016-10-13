function noop() {}

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
  onFocus?: (event: {nativeEvent: {text: string}}) => void;
  onBlur?: (event: {nativeEvent: {text: string}}) => void;
  onCancel?: Function;
  /** web only */
  onClear?: Function;
  showCancelButton?: boolean;
  cancelText?: string;
  /** web only */
  disabled?: boolean;
}

export interface SearchBarState {
  value?: string;
  focus?: boolean;
}

export const defaultProps = {
  prefixCls: 'am-search',
  placeholder: '',
  onSubmit: noop,
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  onClear: noop,
  showCancelButton: false,
  cancelText: '取消',
  disabled: false,
};
