interface SegmentedControlProps {
  tintColor?: string;
  enabled?: boolean;
  selectedIndex?: number;
  values?: Array<string>;
  onChange?: (e: Event) => void;
  onValueChange?: (value: string) => void;
  /* web only */
  prefixCls?: string;
  className?: string;
}

export default SegmentedControlProps;
