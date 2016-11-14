import React from 'react';
import ReactTimerMixin from 'react-timer-mixin';
import Pagination from '../pagination';
import {
  View,
  Text,
  ScrollView,
  Platform,
} from 'react-native';
import styles from './style';

export interface CarouselProps {
  selectedIndex?: number;
  bounces?: boolean;
  children?: any;
  style?: any;
  dots?: boolean;
  autoplay?: boolean;
  autoplayTimeout?: number;
  infinite?: boolean;
  onScrollBeginDrag?: Function;
  onMomentumScrollEnd?: Function;
  afterChange?: (selectedIndex: number) => void;
}

const Carousel = React.createClass<CarouselProps, any>({
  mixins: [ReactTimerMixin],

  getDefaultProps() {
    return {
      bounces: true,
      infinite: false,
      dots: true,
      autoplay: false,
      autoplayTimeout: 2.5,
      selectedIndex: 0,
      // vertical 目前只实现 pagination，内容 vertical 由于自动高度拿不到，暂时无法实现
      vertical: false,
    };
  },

  getInitialState() {
    const props = this.props;
    const count = props.children ? props.children.length || 1 : 0;
    const selectedIndex = count > 1 ? Math.min(props.selectedIndex, count - 1) : 0;
    return {
      width: 0,
      isScrolling: false,
      autoplayEnd: false,
      loopJump: false,
      selectedIndex,
      offset: { x: 0, y: 0 },
    };
  },

  componentDidMount() {
    this.autoplay();
  },

  loopJump() {
    // iOS 通过 contentOffet 可以平滑过度，不需要做处理
    if (this.state.loopJump && Platform.OS === 'android') {
      const index = this.state.selectedIndex + (this.props.infinite ? 1 : 0);
      setTimeout(() => {
        const x = this.state.width * index;
        (this.refs as any).scrollview.scrollTo({ x, y: 0 }, false);
      }, 10);
    }
  },

  autoplay() {
    const { children, autoplay, infinite, autoplayTimeout } = this.props;
    const { isScrolling, autoplayEnd, selectedIndex } = this.state;
    const count = children ? children.length || 1 : 0;
    if ( !Array.isArray(children) || !autoplay || isScrolling || autoplayEnd ) {
      return;
    }

    clearTimeout(this.autoplayTimer);

    this.autoplayTimer = this.setTimeout(() => {
      if (!infinite && (selectedIndex === count - 1)) {
        // !infinite && last one, autoplay end
        return this.setState({ autoplayEnd: true });
      }
      this.scrollNextPage();
    }, autoplayTimeout * 1000);
  },

  onScrollBegin(e) {
    this.setState({
      isScrolling: true,
    }, () => {
      if (this.props.onScrollBeginDrag) {
        this.props.onScrollBeginDrag(e, this.state, this);
      }
    });
  },

  onScrollEnd(e) {
    this.setState({ isScrolling: false });
    // android incompatible
    if (!e.nativeEvent.contentOffset) {
      const position = e.nativeEvent.position;
      e.nativeEvent.contentOffset = {
        x: position * this.state.width,
      };
    }

    this.updateIndex(e.nativeEvent.contentOffset);

    this.setTimeout(() => {
      this.autoplay();
      this.loopJump();
      if (this.props.onMomentumScrollEnd) {
        this.props.onMomentumScrollEnd(e, this.state, this);
      }
    });
  },

  onScrollEndDrag(e) {
    const { offset, selectedIndex } = this.state;
    const previousOffset = offset.x;
    const newOffset = e.nativeEvent.x;
    const count = this.props.children ? this.props.children.length || 1 : 0;

    if (previousOffset === newOffset && (selectedIndex === 0 || selectedIndex === count - 1)) {
      this.setState({
        isScrolling: false,
      });
    }
  },

  updateIndex(offset) {
    let state = this.state;
    let selectedIndex = state.selectedIndex;
    let diff = offset.x - state.offset.x;
    let step = state.width;
    let loopJump = false;
    let count = this.props.children ? this.props.children.length || 1 : 0;

    // Do nothing if offset no change.
    if (!diff) {
      return;
    }

    selectedIndex = parseInt(selectedIndex + Math.round(diff / step), 10);

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
  },

  scrollNextPage() {
    const { children, infinite } = this.props;
    const count = children ? children.length || 1 : 0;
    if (this.state.isScrolling || count < 2) {
      return;
    }

    let state = this.state;
    let diff = (infinite ? 1 : 0) + this.state.selectedIndex + 1;
    let x = diff * state.width;
    let y = 0;

    (this.refs as any).scrollview.scrollTo({ x, y });

    this.setState({
      isScrolling: true,
      autoplayEnd: false,
    });

    // trigger onScrollEnd manually in android
    if (Platform.OS === 'android') {
      this.setTimeout(() => {
        this.onScrollEnd({
          nativeEvent: {
            position: diff,
          },
        });
      }, 0);
    }
  },

  renderContent(pages) {
      const others = {
        onScrollBeginDrag: this.onScrollBegin,
        onMomentumScrollEnd: this.onScrollEnd,
        onScrollEndDrag: this.onScrollEndDrag,
      };
      return (
        <ScrollView
          ref="scrollview"
          {...this.props}
          horizontal
          pagingEnabled
          bounces={!!this.props.bounces}
          scrollEventThrottle={100}
          removeClippedSubviews={true}
          automaticallyAdjustContentInsets={false}
          directionalLockEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.wrapper, this.props.style]}
          contentOffset={this.state.offset}
          style={{ flex: 1 }}
          {...others}
        >
          {pages}
        </ScrollView>
      );
  },

  renderDots(index) {
    // vertical 的时候位置有问题，需要做判断
    let positionStyle = 'paginationX';
    let flexDirection = 'row';
    if (this.props.vertical) {
      positionStyle = 'paginationY';
      flexDirection = 'column';
    }
    const count = this.props.children ? this.props.children.length || 1 : 0;
    return (
      <Pagination
        style={[styles.pagination, styles[positionStyle]]}
        indicatorStyle={{ flexDirection }}
        current={index}
        mode="pointer"
        total={count}
      />
    );
  },

  onLayout(e) {
    // for horizontal, get width, scollTo
    const props = this.props;
    const count = props.children ? props.children.length || 1 : 0;
    const selectedIndex = count > 1 ? Math.min(props.selectedIndex, count - 1) : 0;
    const width = e.nativeEvent.layout.width;
    const offsetX = width * (selectedIndex + (props.infinite ? 1 : 0));
    this.setState({
      width,
      offset: { x: offsetX, y: 0 },
    }, () => {
      if (Platform.OS === 'android') {
        this.refs.scrollview.scrollTo({ y: 0, x: offsetX }, false);
      }
    });
  },

  render() {
    let state = this.state;
    let props = this.props;
    let children = props.children;
    let infinite = props.infinite;
    let pages: any = [];

    if (!children) {
      return (
        <Text style={{backgroundColor: 'white'}}>
          You are supposed to add children inside Carousel
        </Text>
      );
    }

    const pageStyle = [{ width: state.width }, styles.slide];
    const count = props.children ? props.children.length || 1 : 0;
    // For make infinite at least count > 1
    if (count > 1) {
      pages = Object.keys(children);
      if (infinite) {
        pages.unshift(count - 1 + '');
        pages.push('0');
      }
      pages = pages.map((page, i) => {
        return (<View style={pageStyle} key={i}>{children[page]}</View>);
      });
    } else {
      pages = (<View style={pageStyle}>{children}</View>);
    }

    return (
      <View onLayout={this.onLayout} style={[styles.container]}>
        {this.renderContent(pages)}
        {props.dots && this.renderDots(this.state.selectedIndex)}
      </View>
    );
  },
});

export default Carousel;
