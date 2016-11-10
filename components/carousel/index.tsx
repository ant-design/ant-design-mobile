import React from 'react';
import ReactTimerMixin from 'react-timer-mixin';
import Pagination from '../pagination';
import {
  View,
  Text,
  ScrollView,
  Platform,
  StyleSheet,
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
    };
  },

  getInitialState() {
    const props = this.props;
    const count = props.children ? props.children.length || 1 : 0;
    const selectedIndex = count > 1 ? Math.min(props.selectedIndex, count - 1) : 0;
    this.count = count;
    return {
      width: 0,
      isScrolling: false,
      autoplayEnd: false,
      loopJump: false,
      selectedIndex,
      offset: {
        x: 0,
        y: 0,
      },
    };
  },

  componentDidMount() {
    this.autoplay();
  },

  loopJump() {
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
    if ( !Array.isArray(children) || !autoplay || isScrolling || autoplayEnd ) {
      return;
    }

    clearTimeout(this.autoplayTimer);

    this.autoplayTimer = this.setTimeout(() => {
      if (!infinite && (selectedIndex === this.count - 1)) {
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
      e.nativeEvent.contentOffset = { x: e.nativeEvent.position * this.state.width };
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

    if (previousOffset === newOffset && (selectedIndex === 0 || selectedIndex === this.count - 1)) {
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

    // Do nothing if offset no change.
    if (!diff) {
      return;
    }

    selectedIndex = parseInt(selectedIndex + Math.round(diff / step), 10);

    if (this.props.infinite) {
      if (selectedIndex <= -1) {
        selectedIndex = this.count - 1;
        offset.x = step * this.count;
        loopJump = true;
      } else if (selectedIndex >= this.count) {
        selectedIndex = 0;
        offset.x = step;
        loopJump = true;
      }
    }

    this.setState({
      selectedIndex,
      offset,
      loopJump: loopJump,
    });

    const { afterChange } = this.props;
    if (afterChange) {
      afterChange(selectedIndex);
    }
  },

  scrollNextPage() {
    if (this.state.isScrolling || this.count < 2) {
      return;
    }
    let state = this.state;
    let diff = (this.props.infinite ? 1 : 0) + this.state.selectedIndex + 1;
    let x = 0;
    let y = 0;
    x = diff * state.width;

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
          horizontal={true}
          pagingEnabled={true}
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
    return (
      <Pagination
        style={styles.paginationX}
        current={index}
        mode="pointer"
        total={this.count}
      />
    );
  },

  onLayout(e) {
    const { children, infinite } = this.props;
    const selectedIndex = this.count > 1 ? Math.min(this.props.selectedIndex, this.count - 1) : 0;
    const width = e.nativeEvent.layout.width;
    const offsetX = width * (selectedIndex + (infinite ? 1 : 0));
    this.setState({
      width,
      offset: { x: offsetX, y: 0 },
    }, () => {
      if (Platform.OS === 'android') {
        // android 不支持 contentOffset
        // iOS animated=fasle 貌似不生效
        this.refs.scrollview.scrollTo({ y: 0, x: offsetX }, false)
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

    let pageStyle = [{ width: state.width }, styles.slide];
    // For make infinite at least count > 1
    if (this.count > 1) {
      pages = Object.keys(children);
      if (infinite) {
        pages.unshift(this.count - 1 + '');
        pages.push('0');
      }
      pages = pages.map((page, i) => {
        return (<View style={pageStyle} key={i}>{children[page]}</View>);
      });
    } else {
      pages = (<View  style={pageStyle}>{children}</View>);
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
