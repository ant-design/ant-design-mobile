import ReactNode = __React.ReactNode;
interface Props {
  onRefresh?: () => void;
  refreshing?: boolean;
  /** web only */
  prefixCls?: string;
  children?: any;
  contentClassName?: string;
  contentStyle?: {};
  icon?: ReactNode;
  loading?: ReactNode;
  distanceToRefresh?: number;
  resistance?: number;
}

export default Props;
