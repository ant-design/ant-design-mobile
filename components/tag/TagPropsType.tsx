interface TagProps {
  type?: 'action' | 'read';
  disabled?: boolean;
  size?: 'large'|'small';
  closable?: boolean;
  selected?: boolean;
  onChange?: (selected: boolean) => void;
  onClose?: () => void;
  afterClose?: () => void;
  style?: {};
  /** web only */
  prefixCls?: string;
  className?: string;
}

export default TagProps;
