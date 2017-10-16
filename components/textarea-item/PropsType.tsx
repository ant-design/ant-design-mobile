import React from 'react';

interface TextAreaItemProps {
  style?: any;
  title?: React.ReactNode;
  maxLength?: number;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  clear?: boolean;
  rows?: number;
  count?: number;
  onChange?: Function;
  onBlur?: Function;
  onFocus?: Function;
  error?: boolean;
  onErrorClick?: () => void;
  autoHeight?: boolean;
  editable?: boolean;
  disabled?: boolean;
  labelNumber?: number;
}

export default TextAreaItemProps;
