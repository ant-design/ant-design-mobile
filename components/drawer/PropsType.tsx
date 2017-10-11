export interface DrawerProps {
  onOpenChange?: (isOpen: boolean) => void;
  sidebar?: any;
  open?: boolean;
  position?: 'left' | 'right' | 'top' | 'bottom';
  children?: any;
}

export interface DrawerWebProps extends DrawerProps {
  sidebarStyle?: Object;
  contentStyle?: Object;
  overlayStyle?: Object;
  dragHandleStyle?: Object;
  docked?: boolean;
  transitions?: boolean;
  touch?: boolean;
  dragToggleDistance?: number;
  prefixCls?: string;
}

export interface DrawerNativeProps extends DrawerProps {
  drawerRef?: (el: any) => any;
  drawerWidth?: number;
  drawerBackgroundColor?: string;
}
