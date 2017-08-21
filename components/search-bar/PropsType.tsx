function noop() {}

export interface SearchBarProps {
  style?: any;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  onSubmit?: Function;
  onChange?: Function;
  onFocus?: () => void;
  onBlur?: () => void;
  onCancel?: Function;
  showCancelButton?: boolean;
  cancelText?: string;
  disabled?: boolean;
  styles?: any;
  autoFocus?: boolean;
  focused?: boolean;
  /** web only */
  prefixCls?: string;
  className?: string;
  onClear?: Function;
  maxLength?: number;
}

export interface SearchBarState {
  value?: string;
  focus?: boolean;
  focused?: boolean;
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
