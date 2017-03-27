interface Props {
  children?: any;
  sidebarStyle?: Object;
  contentStyle?: Object;
  overlayStyle?: Object;
  dragHandleStyle?: Object;
  sidebar?: any;
  open?: boolean;
  position?: 'left'|'right'|'top'|'bottom';
  docked?: boolean;
  transitions?: boolean;
  touch?: boolean;
  dragToggleDistance?: number;
  /** below web only */
  prefixCls?: string;
  /** below rn only */
  onOpenChange?: (_x: boolean) => void;
  drawerWidth?: number;
  drawerBackgroundColor?: string;
}

export default Props;
