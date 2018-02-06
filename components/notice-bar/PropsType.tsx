import React from 'react';

export interface NoticeBarPropsType {
  mode?: 'closable' | 'link';
  onClick?: () => void;
  icon?: React.ReactElement<any>;
  action?: React.ReactElement<any>;
}
