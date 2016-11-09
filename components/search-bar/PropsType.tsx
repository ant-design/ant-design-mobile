import React from 'react';

function noop() {}

export interface SearchBarProps {
  value?: string;
  placeholder?: string;
  onSubmit?: Function;
  onChange?: Function;
  onFocus?: () => void;
  onBlur?: () => void;
  onCancel?: Function;
  showCancelButton?: boolean;
  cancelText?: string;
  /** web only */
  prefixCls?: string;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  onClear?: Function;
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
