export interface FlexPropsType {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  disabled?: boolean;
}

export interface FlexItemPropsType {
  disabled?: boolean;
}
