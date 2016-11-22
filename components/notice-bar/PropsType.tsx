import React from 'react';

interface NoticeBarPropsType {
  mode?: 'closable' | 'link';
  onClick?: () => void;
  icon?: React.ReactNode;
  style?: {};
  /* web only */
  className?: string;
  prefixCls?: string;
  /* rn only */
  styles?: any;
}

export default NoticeBarPropsType;
