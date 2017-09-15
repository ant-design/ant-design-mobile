interface SwipeActionProps {
  /** whether button is disabled*/
  autoClose?: boolean;
  disabled?: boolean;
  title?: string;
  left?: Array<{ text: string; onPress?: () => void; style?: any; className?: string }>;
  right?: Array<{ text: string; onPress?: () => void; style?: any; className?: string }>;
  onOpen?: () => void;
  onClose?: () => void;
  style?: any;
}

export default SwipeActionProps;
