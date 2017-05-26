interface Props {
  onOpenChange?: (isOpen: boolean) => void;
  sidebar?: any;
  open?: boolean;
  position?: 'left'|'right'|'top'|'bottom';
  children?: any;
  /** below web only */
  sidebarStyle?: Object;
  contentStyle?: Object;
  overlayStyle?: Object;
  dragHandleStyle?: Object;
  docked?: boolean;
  transitions?: boolean;
  touch?: boolean;
  dragToggleDistance?: number;
  prefixCls?: string;
  /** below rn only */
  drawerRef?: (el: any) => any;
  drawerWidth?: number;
  drawerBackgroundColor?: string;
}

export default Props;
