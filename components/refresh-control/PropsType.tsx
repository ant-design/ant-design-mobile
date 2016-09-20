interface Props {
  onRefresh?: () => void;
  refreshing?: boolean;
  /** web only */
  prefixCls?: string;
  children?: any;
  contentClassName?: string;
  contentStyle?: {};
  icon?: any;
  loading?: any;
  distanceToRefresh?: number;
  resistance?: number;
  loadingFunction?: () => void;
}

export default Props;
