export interface OnChangeParams {
  target: {
    checked: boolean;
  };
}
export interface CheckboxPropsType {
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (params: OnChangeParams) => void;
}

export interface CheckboxItemPropsType extends CheckboxPropsType {
  extra?: React.ReactNode;
  prefixCls?: string;
  onClick?: (e?: any) => void;
}
