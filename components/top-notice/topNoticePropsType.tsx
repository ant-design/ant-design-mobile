interface TopNoticePropsType {
  mode?: 'closable' | 'link';
  onClick?: () => void;
  type?: 'success' | 'error' | 'warn' | 'question' | 'info';
  /* web only */
  className?: string;
  prefixCls?: string;
}

export default TopNoticePropsType;