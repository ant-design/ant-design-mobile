interface ModalProps {
  title?: string;
  visible: boolean;
  maskClosable?: boolean;
  closable?: boolean;
  footer?: Array<{}>;
  onClose?: () => void;
  /** react native only **/
  transparent?: boolean;
  style?: {};
  animated?: boolean;
  bodyStyle?: {};
  animationType?: any;
  onAnimationEnd?: (visible: boolean) => void;
  animateAppear?: boolean;
  styles?: any;
  /** web only */
  prefixCls?: string;
  transitionName?: string;
  maskTransitionName?: string;
  className?: string;
  wrapClassName?: string;
  touchFeedback?: boolean;
  wrapProps?: {};
  operation?: boolean;
  platform?: string;
};

export default ModalProps;
