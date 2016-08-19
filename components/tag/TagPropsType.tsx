interface TagProps {
  disabled?: boolean;
  selected?: boolean;
  onChange?: (selected: boolean) => void;
  style?: {};
  /** web only */
  prefixCls?: string;
  className?: string;
}

export default TagProps;
