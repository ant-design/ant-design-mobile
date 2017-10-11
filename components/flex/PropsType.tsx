import { ReactNode } from 'react';

export interface FlexProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  children?: ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties | {} | Array<{}>;
}

export interface FlexItemProps {
  disabled?: boolean;
  children?: ReactNode;
  style?: React.CSSProperties | {} | Array<{}>;
}
