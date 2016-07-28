import * as React from 'react';

interface FlexPropsType {
  /** web only */
  prefixCls?: string;
  style?: React.CSSProperties;
  /** web only */
  className?: string;
  direction?: string;
  wrap?: string;
  justify?: string;
  align?: string;
  alignContent?: string;
  children?: any;
  /** rn only */
  onPress?: any;
  /** web only */
  onClick?: Function;
}

export default FlexPropsType;
