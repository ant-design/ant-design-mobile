interface ActivityIndicatorPropTypes {
  animating?: boolean;
  toast?: boolean;
  color?: 'gray' | 'white';
  size?: 'large' | 'small';
  text?: string;
  styles?: any;
  /** web only */
  prefixCls?: string;
  className?: string;
}

export default ActivityIndicatorPropTypes;
