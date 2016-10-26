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
  /** web only */
  prefixCls?: string;
  transitionName?: string;
  maskTransitionName?: string;
  className?: string;
  wrapClassName?: string;
  touchFeedback?: boolean;
  wrapProps?: {};
};

export default ModalProps;
