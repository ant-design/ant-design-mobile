export interface CardProps {
  full?: boolean;
  className?: string;
  style?: {};
  /** web only */
  prefixCls?: string;
  /** rn only */
  styles?: any;
}

export interface CardHeaderProps {
  title?: any;
  thumb?: string;
  extra?: any;
  thumbStyle?: {};
  className?: string;
  style?: any;
  /** web only */
  prefixCls?: string;
  /** rn only */
  styles?: any;
}

export interface CardBodyProps {
  children?: any;
  className?: string;
  style?: {};
  /** web only */
  prefixCls?: string;
  /** rn only */
  styles?: any;
}

export interface CardFooterProps {
  content?: any;
  extra?: any;
  className?: string;
  style?: {};
  /** web only */
  prefixCls?: string;
  /** rn only */
  styles?: any;
}
