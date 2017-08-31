import React from 'react';

interface NoticeBarPropsType {
  mode?: 'closable' | 'link';
  onClick?: () => void;
  icon?: React.ReactNode;
}

export default NoticeBarPropsType;
