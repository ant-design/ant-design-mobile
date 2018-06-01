export interface PopoverPropsType {
  onSelect?: (node: any, index?: number) => void;
  overlay: React.ReactNode;
  disabled?: boolean;
}
