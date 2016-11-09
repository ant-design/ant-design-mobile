// import React from 'react';

interface NavBarProps {
  prefixCls?: string;
  children?: any;
  mode?: 'dark' | 'light';
  iconName?: string | boolean;
  leftContent?: any;
  rightContent?: any;
  onLeftClick?: () => void;
}

export default NavBarProps;
