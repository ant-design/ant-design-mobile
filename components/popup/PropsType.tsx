export interface PopupProps {
  style?: any;
  animationType?: string;
  maskClosable?: boolean;
  onMaskClose?: () => any;
  visible?: boolean;
  onAnimationEnd?: (visible: boolean) => void;
}

export default PopupProps;
