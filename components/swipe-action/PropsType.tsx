interface SwipeActionProps {
  /** whether button is disabled*/
  autoClose?: boolean;
  disabled?: boolean;
  title?: string;
  left?: Array<{text: string; onPress?: () => void; style?: any; className?: string}>;
  right?: Array<{text: string; onPress?: () => void; style?: any; className?: string}>;
  onOpen?: () => void;
  onClose?: () => void;
  style?: {};
  /** web only */
  prefixCls?: string;
  className?: string;
  /** rn android only**/
  styles?: any;
}

export default SwipeActionProps;
