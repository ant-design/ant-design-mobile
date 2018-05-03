import * as React from 'react';

export interface DrawerProps {
  onOpenChange?: (isOpen: boolean) => void;
  sidebar?: React.ReactNode;
  open?: boolean;
  position?: 'left' | 'right' | 'top' | 'bottom';
}

export interface DrawerWebProps extends DrawerProps {
  sidebarStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  overlayStyle?: React.CSSProperties;
  dragHandleStyle?: React.CSSProperties;
  docked?: boolean;
  transitions?: boolean;
  touch?: boolean;
  dragToggleDistance?: number;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}
