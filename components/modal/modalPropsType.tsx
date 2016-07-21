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
  /** web only */
  prefixCls?: string;
};

export default ModalProps;
