function noop() {}

export interface SearchBarPropsType {
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  onSubmit?: (value: string) => void;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onCancel?: (value: string) => void;
  showCancelButton?: boolean;
  cancelText?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  focused?: boolean;
  onClear?: (value: string) => void;
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
  disabled: false,
};
