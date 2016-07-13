interface Props {
  children?:any;
  sidebarStyle?:Object;
  contentStyle?:Object;
  overlayStyle?:Object;
  dragHandleStyle?:Object;
  sidebar?:any;
  open?:boolean;
  position?:'left'|'right'|'top'|'bottom';
  docked?:boolean;
  transitions?:boolean;
  touch?:boolean;
  dragToggleDistance?:number;
  /** web only */
  prefixCls?:string;
}

export default Props;
