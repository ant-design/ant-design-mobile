interface SegmentedControlProps {
  tintColor?: string;
  disabled?: boolean;
  selectedIndex?: number;
  values?: Array<string>;
  onChange?: (e: any) => void;
  onValueChange?: (value: string) => void;
  style?: any;
  touchFeedback?: boolean;
}

export default SegmentedControlProps;
