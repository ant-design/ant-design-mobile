interface SwitchProps {
  style?: {};
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  color?: string;
  /* web only */
  prefixCls?: string;
  className?: string;
  name?: string;
  platform?: string;
  onClick?: (checked?: boolean) => void;
}

export default SwitchProps;
