export interface PaginationPropsType {
  mode?: 'button' | 'number' | 'pointer';
  simple?: boolean;
  current: number;
  total: number;
  prevText?: string;
  nextText?: string;
  onPrev?: () => void;
  onNext?: () => void;
  onChange?: (current: number) => void;
}
export interface PaginationState {
  current: number;
}
