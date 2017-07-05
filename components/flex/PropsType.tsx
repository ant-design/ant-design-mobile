import { ReactNode } from 'react';

export interface FlexProps {
  direction?: 'row'|'row-reverse'|'column'|'column-reverse';
  wrap?: 'nowrap'|'wrap'|'wrap-reverse';
  justify?: 'start'|'end'|'center'|'between'|'around';
  align?: 'top'|'start'|'middle'|'center'|'bottom'|'end'|'baseline'|'stretch';
  children?: ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties | {} | Array<{}>;
  /* for web */
  alignContent?: 'start'|'end'|'center'|'between'|'around'|'stretch';
  onClick?: () => void;
  prefixCls?: string;
  className?: string;
  role?: string;
  /* for native */
  onPress?: (e?: any) => void;
  onLongPress?: any;
  onPressIn?: any;
  onPressOut?: any;
}

export interface FlexItemProps {
  disabled?: boolean;
  children?: ReactNode;
  style?: React.CSSProperties | {} | Array<{}>;
  /* for web */
  prefixCls?: string;
  className?: string;
  /* for native */
  flex?: number;
  onPress?: (e?: any) => void;
  onLongPress?: any;
  onPressIn?: any;
  onPressOut?: any;
}
