interface Props {
  onSelect?: (node: any, index?: number) => void;
  overlay: any;
  disabled?: boolean;
  children?: any;
  /** rn only */
  style?: any;
  triggerStyle?: any;
  overlayStyle?: any;
  contextStyle?: any;
  renderOverlayComponent?: (values: any) => any;
  name?: string;
  openMenu?: Function;
  closeMenu?: Function;
  toggleMenu?: Function;
  /** web only */
  prefixCls?: string;
  visible?: boolean;
  onVisibleChange?: Function;
  placement?: 'left' | 'right' | 'top' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  mask?: boolean;
}

export default Props;
