interface Props {
  contentClassName?: string;
  contentStyle?: {};
  icon?: any;
  loading?: any;
  distanceToRefresh?: number;
  resistance?: number;
  loadingFunction?: (values) => void;
  hammerOptions?: {};
  children?: any;
  /** web only */
  prefixCls?: string;
}

export default Props;
