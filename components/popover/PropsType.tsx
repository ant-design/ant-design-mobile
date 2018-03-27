export interface PopoverPropsType {
  onSelect?: (node: any, index?: number) => void;
  overlay: React.ComponentType<any>;
  disabled?: boolean;
}
