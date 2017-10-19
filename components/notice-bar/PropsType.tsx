import React from 'react';

interface NoticeBarPropsType {
  mode?: 'closable' | 'link';
  onClick?: () => void;
  icon?: React.ReactElement<any>;
  actionText?: React.ReactElement<any>;
}

export default NoticeBarPropsType;
