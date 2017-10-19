import React from 'react';

interface NoticeBarPropsType {
  mode?: 'closable' | 'link';
  onClick?: () => void;
  icon?: React.ReactElement<any>;
  action?: React.ReactElement<any>;
}

export default NoticeBarPropsType;
