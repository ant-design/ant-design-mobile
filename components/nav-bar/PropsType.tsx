import React from 'react';

interface NavBarProps {
  prefixCls?: string;
  className?: string;
  mode?: 'dark' | 'light';
  icon?: React.ReactNode;
  leftContent?: any;
  rightContent?: any;
  onLeftClick?: () => void;
}

export default NavBarProps;
