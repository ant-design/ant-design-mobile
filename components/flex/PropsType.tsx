import { ReactNode } from 'react';
import { NativeProps, WebProps } from '../baseType';

export interface FlexProps {
  direction?: 'row'|'row-reverse'|'column'|'column-reverse';
  wrap?: 'nowrap'|'wrap'|'wrap-reverse';
  justify?: 'start'|'end'|'center'|'between'|'around';
  align?: 'top'|'start'|'middle'|'center'|'bottom'|'end'|'baseline'|'stretch';
  children?: JSX.Element | JSX.Element[];
  disabled?: boolean;
}

export interface FlexWebProps extends WebProps, FlexProps {
  alignContent?: 'start'|'end'|'center'|'between'|'around'|'stretch';
  onClick?: () => void;
}

export interface FlexNativeProps extends NativeProps, FlexProps {
  onPress?: (e?: any) => void;
  onLongPress?: any;
  onPressIn?: any;
  onPressOut?: any;
}

export interface FlexItemProps {
  disabled?: boolean;
  children?: ReactNode;
}

export interface FlexItemWebProps extends WebProps, FlexItemProps {

}

export interface FlexItemNativeProps extends NativeProps, FlexItemProps {
  flex?: number;
  onPress?: (e?: any) => void;
  onLongPress?: any;
  onPressIn?: any;
  onPressOut?: any;
}
