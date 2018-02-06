export interface SegmentedControlPropsType {
  tintColor?: string;
  disabled?: boolean;
  selectedIndex?: number;
  values?: string[];
  onChange?: (e: any) => void;
  onValueChange?: (value: string) => void;
}
