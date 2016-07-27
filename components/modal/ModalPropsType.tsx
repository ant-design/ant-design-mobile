interface ModalProps {
  title?: string;
  visible: boolean;
  closable?: boolean;
  maskClosable?: boolean;
  footer?: any;
  onClose?: () => void;
  onShow?: () => void;
  animated?: boolean;
  transparent?: boolean;
  style?: {};
  /** react native only **/
  onRequestClose?: () => void;
  /** web only */
  prefixCls?: string;
  animation?: string;
  maskAnimation?: string;
  className?: string;
  wrapClassName?: string;
  bodyStyle?: {};
};

export default ModalProps;
