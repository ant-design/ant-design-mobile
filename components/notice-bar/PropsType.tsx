import * as React from 'react';

export interface NoticeBarPropsType {
  mode?: 'closable' | 'link';
  onClick?: () => void;
  icon?: React.ReactElement<any> | null;
  action?: React.ReactElement<any>;
}
