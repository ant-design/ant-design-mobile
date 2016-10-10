interface TagProps {
  disabled?: boolean;
  selected?: boolean;
  closable?: boolean;
  small?: boolean;
  onChange?: (selected: boolean) => void;
  onClose?: () => void;
  afterClose?: () => void;
  style?: {};
  /** web only */
  prefixCls?: string;
  className?: string;
}

export default TagProps;
