import NativeSyntheticEvent = __React.NativeSyntheticEvent;
interface Props {
  children?: any;
  visible?: boolean;
  onShow?: (event: NativeSyntheticEvent<any>) => void;
  onClose?: () => void;
  maskClosable?: boolean;
  /** web only */
  prefixCls?: string;
}

export default Props;
