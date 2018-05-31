import React from 'react';
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { CarouselPropsType } from './PropsType';
import CarouselStyle from './style/index.native';

export interface CarouselProps extends CarouselPropsType {
  bounces?: boolean;
  onScrollBeginDrag?: (
    event: NativeSyntheticEvent<NativeScrollEvent>,
    state: CarouselState,
    carousel: Carousel,
  ) => void;
  onMomentumScrollEnd?: (
    event: NativeSyntheticEvent<NativeScrollEvent>,
    state: CarouselState,
    carousel: Carousel,
  ) => void;
  styles?: any;
  style?: StyleProp<ViewStyle>;
  dotStyle?: StyleProp<ViewStyle>;
  dotActiveStyle?: StyleProp<ViewStyle>;
  pagination?: (props: PaginationProps) => React.ReactNode;
  afterChange?: (index: number) => void;
}
export interface CarouselOffset {
  x: number;
  y: number;
}
export interface CarouselState {
  width: number;
  selectedIndex: number;
  isScrolling: boolean;
  autoplayEnd: boolean;
  loopJump: boolean;
  offset: CarouselOffset;
}

export interface PaginationProps {
  styles: any;
  vertical?: boolean;
  current: number;
  count: number;
  dotStyle?: StyleProp<ViewStyle>;
  dotActiveStyle?: StyleProp<ViewStyle>;
}
const CarouselStyles = StyleSheet.create<any>(CarouselStyle);

const defaultPagination = (props: PaginationProps) => {
  const { styles, current, vertical, count, dotStyle, dotActiveStyle } = props;
  const positionStyle = vertical ? 'paginationY' : 'paginationX';
  const flexDirection = vertical ? 'column' : 'row';
  const arr: any = [];
  for (let i = 0; i < count; i++) {
    arr.push(
      <View
        key={`dot-${i}`}
        // tslint:disable-next-line:jsx-no-multiline-js
        style={[
          styles.pointStyle,
          styles.spaceStyle,
          dotStyle,
          i === current && styles.pointActiveStyle,
          i === current && dotActiveStyle,
        ]}
      />,
    );
  }
  return (
    <View style={[styles.pagination, styles[positionStyle]]}>
      <View style={{ flexDirection }}>{arr}</View>
    </View>
  );
};

class Carousel extends React.Component<CarouselProps, CarouselState> {
  static defaultProps: CarouselProps = {
    bounces: true,
    infinite: false,
    dots: true,
    autoplay: false,
    autoplayInterval: 3000,
    selectedIndex: 0,
    // vertical 目前只实现 pagination，内容 vertical 由于自动高度拿不到，暂时无法实现
    vertical: false,
    styles: CarouselStyles,
    pagination: defaultPagination,
    dotStyle: {},
    dotActiveStyle: {},
  };

  private scrollviewRef: any;
  private autoplayTimer: number;
  private androidScrollEndTimer: number;
  private scrollEndTimter: number;

  constructor(props: CarouselProps) {
    super(props);
    const { children, selectedIndex } = this.props;
    const count = this.getChildrenCount(children);
    const index = count > 1 ? Math.min(selectedIndex as number, count - 1) : 0;
    this.state = {
      width: 0,
      isScrolling: false,
      autoplayEnd: false,
      loopJump: false,
      selectedIndex: index,
      offset: { x: 0, y: 0 },
    };
  }
  getChildrenCount = (children: React.ReactNode) => {
    const count = children ? React.Children.count(children) || 1 : 0;
    return count;
  }
  componentDidMount() {
    this.autoplay();
  }

  componentWillUnmount() {
    clearTimeout(this.autoplayTimer);
    clearTimeout(this.androidScrollEndTimer);
    clearTimeout(this.scrollEndTimter);
  }
  loopJump = () => {
    // iOS 通过 contentOffet 可以平滑过度，不需要做处理
    if (this.state.loopJump && Platform.OS === 'android') {
      const index = this.state.selectedIndex + (this.props.infinite ? 1 : 0);
      setTimeout(() => {
        const x = this.state.width * index;
        this.scrollviewRef.scrollTo({ x, y: 0 }, false);
      }, 10);
    }
  }

  autoplay = () => {
    const { children, autoplay, infinite, autoplayInterval } = this.props;
    const { isScrolling, autoplayEnd, selectedIndex } = this.state;
    const count = this.getChildrenCount(children);
    if (!Array.isArray(children) || !autoplay || isScrolling || autoplayEnd) {
      return;
    }

    clearTimeout(this.autoplayTimer);

    this.autoplayTimer = setTimeout(() => {
      if (!infinite && selectedIndex === count - 1) {
        // !infinite && last one, autoplay end
        return this.setState({ autoplayEnd: true });
      }
      this.scrollNextPage();
    }, autoplayInterval);
  }

  onScrollBegin = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    this.setState(
      {
        isScrolling: true,
      },
      () => {
        if (this.props.onScrollBeginDrag) {
          this.props.onScrollBeginDrag(e, this.state, this);
        }
      },
    );
  }

  onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    this.setState({ isScrolling: false });
    // android incompatible
    if (!e.nativeEvent.contentOffset) {
      // kind of hack ? see: line 282
      const position = (e.nativeEvent as any).position;
      (e.nativeEvent as any).contentOffset = {
        x: position * this.state.width,
      };
    }

    this.updateIndex(e.nativeEvent.contentOffset);

    this.scrollEndTimter = setTimeout(() => {
      this.autoplay();
      this.loopJump();
      if (this.props.onMomentumScrollEnd) {
        this.props.onMomentumScrollEnd(e, this.state, this);
      }
    });
  }

  onScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { offset, selectedIndex } = this.state;
    const { children } = this.props;

    const previousOffset = offset.x;
    const newOffset = e.nativeEvent.contentOffset.x;
    const count = this.getChildrenCount(children);

    if (
      previousOffset === newOffset &&
      (selectedIndex === 0 || selectedIndex === count - 1)
    ) {
      this.setState({
        isScrolling: false,
      });
    }
  }

  updateIndex = (offset: CarouselOffset) => {
    const state = this.state;
    let selectedIndex = state.selectedIndex;
    const diff = offset.x - state.offset.x;
    const step = state.width;
    let loopJump = false;
    const { children } = this.props;

    const count = this.getChildrenCount(children);

    // Do nothing if offset no change.
    if (!diff) {
      return;
    }

    selectedIndex = selectedIndex + Math.round(diff / step);

    if (this.props.infinite) {
      if (selectedIndex <= -1) {
        selectedIndex = count - 1;
        offset.x = step * count;
        loopJump = true;
      } else if (selectedIndex >= count) {
        selectedIndex = 0;
        offset.x = step;
        loopJump = true;
      }
    }

    this.setState({
      selectedIndex,
      offset,
      loopJump,
    });

    const { afterChange } = this.props;
    if (afterChange) {
      afterChange(selectedIndex);
    }
  }

  scrollNextPage = () => {
    const { children, infinite } = this.props;
    const count = this.getChildrenCount(children);
    if (this.state.isScrolling || count < 2) {
      return;
    }

    const state = this.state;
    const diff = (infinite ? 1 : 0) + this.state.selectedIndex + 1;
    const x = diff * state.width;
    const y = 0;

    this.scrollviewRef.scrollTo({ x, y });

    this.setState({
      isScrolling: true,
      autoplayEnd: false,
    });

    // trigger onScrollEnd manually in android
    if (Platform.OS === 'android') {
      this.androidScrollEndTimer = setTimeout(() => {
        this.onScrollEnd({
          nativeEvent: {
            position: diff,
          },
        } as any);
      }, 0);
    }
  }

  renderContent = (pages: React.ReactNode) => {
    const others = {
      onScrollBeginDrag: this.onScrollBegin,
      onMomentumScrollEnd: this.onScrollEnd,
      onScrollEndDrag: this.onScrollEndDrag,
    };
    return (
      <ScrollView
        ref={el => (this.scrollviewRef = el)}
        {...this.props}
        horizontal
        pagingEnabled
        bounces={!!this.props.bounces}
        scrollEventThrottle={100}
        removeClippedSubviews={false}
        automaticallyAdjustContentInsets={false}
        directionalLockEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={this.props.style}
        contentOffset={this.state.offset}
        {...others}
      >
        {pages}
      </ScrollView>
    );
  }

  renderDots = (index: number) => {
    const {
      children,
      vertical,
      styles,
      pagination,
      dotStyle,
      dotActiveStyle,
    } = this.props;
    const count = this.getChildrenCount(children);
    return pagination
      ? pagination({
          styles,
          vertical,
          current: index,
          count,
          dotStyle,
          dotActiveStyle,
        })
      : null;
  }

  onLayout = (e: LayoutChangeEvent) => {
    // for horizontal, get width, scollTo
    const props = this.props;
    const count = this.getChildrenCount(props.children);
    const selectedIndex =
      count > 1 ? Math.min(props.selectedIndex as number, count - 1) : 0;
    const width = e.nativeEvent.layout.width;
    const offsetX = width * (selectedIndex + (props.infinite ? 1 : 0));
    this.setState(
      {
        width,
        offset: { x: offsetX, y: 0 },
      },
      () => {
        if (Platform.OS === 'android') {
          this.scrollviewRef.scrollTo({ y: 0, x: offsetX }, false);
        }
      },
    );
  }

  render() {
    const state = this.state;
    const { dots, infinite, children } = this.props;

    if (!children) {
      return (
        <Text style={{ backgroundColor: 'white' }}>
          You are supposed to add children inside Carousel
        </Text>
      );
    }

    const pageStyle = { width: state.width };
    const count = this.getChildrenCount(children);
    let pages: React.ReactFragment;

    // For make infinite at least count > 1
    if (count > 1) {
      // TODO: infinite
      const childrenArray = React.Children.toArray(children);

      if (infinite) {
        childrenArray.unshift(childrenArray[count - 1]);
        childrenArray.push(childrenArray[0]);
      }

      pages = childrenArray.map((page, i) => {
        return (
          <View style={pageStyle} key={i}>
            {page}
          </View>
        );
      });
    } else {
      pages = <View style={pageStyle}>{children}</View>;
    }

    return (
      <View onLayout={this.onLayout}>
        {this.renderContent(pages)}
        {dots && this.renderDots(this.state.selectedIndex)}
      </View>
    );
  }
}

export default Carousel;
