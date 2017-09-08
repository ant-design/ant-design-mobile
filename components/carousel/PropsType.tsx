interface Props {
  children?: any;
  selectedIndex?: number;
  dots?: boolean;
  vertical?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  infinite?: boolean;
  easing?: string;
  beforeChange?: (from: number, to: number) => void;
  afterChange?: (current: number) => void;
  style?: any;
  dotStyle?: any;
  dotActiveStyle?: any;
  /** below web only */
  className?: string;
  prefixCls?: string;
  swipeSpeed?: number;
  /** below rn only */
  bounces?: boolean;
  onScrollBeginDrag?: Function;
  onMomentumScrollEnd?: Function;
  styles?: any;
  pagination?: Function;
  initialSlideWidth?: number;
}

export default Props;
