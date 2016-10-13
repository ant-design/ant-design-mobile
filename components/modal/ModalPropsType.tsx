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
  /** web only */
  prefixCls?: string;
  transitionName?: string;
  maskTransitionName?: string;
  className?: string;
  wrapClassName?: string;
  bodyStyle?: {};
  touchFeedback?: boolean;
  wrapProps?: {};
};

export default ModalProps;
