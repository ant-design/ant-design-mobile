import ReactNode = __React.ReactNode;
interface Props {
  onRefresh?: () => void;
  refreshing?: boolean;
  /** web only */
  prefixCls?: string;
  icon?: ReactNode;
  loading?: ReactNode;
  distanceToRefresh?: number;
  resistance?: number;
}

export default Props;
