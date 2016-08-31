import * as React from 'react';
import ReactTimerMixin from 'react-timer-mixin';
import Pagination from '../pagination';
import {
  View,
  Text,
  ScrollView,
  ViewPagerAndroid,
  Platform,
  Dimensions,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import styles from './style';

let {width, height} = Dimensions.get('window');

export interface ViewPagerProps {
  selectedIndex: number;
  bounces?: boolean;
  children?: any;
  style?: any;
  dots?: boolean;
  autoplay?: boolean;
  autoplayTimeout?: number;
  infinite?: boolean;
  onScrollBeginDrag?: Function;
  onMomentumScrollEnd?: Function;
  loadMinimal?: boolean;
  loadMinimalSize?: number;
}

const ViewPager = React.createClass<ViewPagerProps, any>({
  mixins: [ReactTimerMixin],

  getDefaultProps() {
    return {
      bounces: true,
      infinite: true,
      dots: true,
      loadMinimal: false,
      loadMinimalSize: 1,
      autoplay: false,
      autoplayTimeout: 2.5,
      selectedIndex: 0,
    };
  },

  componentWillMount() {
    this.state = this.initState(this.props);

    this.onScrollEnd = this.onScrollEnd.bind(this);
    this.onScrollBegin = this.onScrollBegin.bind(this);
    this.onScrollEndDrag = this.onScrollEndDrag.bind(this);
  },

  componentDidMount() {
    this.autoplay();
  },

  initState(props) {
    // set the current state
    // const state = this.state || {};
    const count = props.children ? props.children.length || 1 : 0;
    width = props.width || width;
    height = props.height || height;
    const selectedIndex = count > 1 ? Math.min(props.selectedIndex, count - 1) : 0;

    let initState = {
      width,
      height,
      isScrolling: false,
      autoplayEnd: false,
      loopJump: false,
      count,
      selectedIndex,
      offset: {
        x: width * (selectedIndex + (props.infinite ? 1 : 0)),
        y: 0,
      },
    };

    return initState;
  },

  loopJump() {
    if (this.state.loopJump) {
      const index = this.state.selectedIndex + (this.props.infinite ? 1 : 0);
      setTimeout(() => (this.refs as any).scrollview.setPageWithoutAnimation
      && (this.refs as any).scrollview.setPageWithoutAnimation(index), 50);
    }
  },

  autoplay() {
    if (
      !Array.isArray(this.props.children)
      || !this.props.autoplay
      || this.state.isScrolling
      || this.state.autoplayEnd
    ) {
      return;
    }

    clearTimeout(this.autoplayTimer);

    this.autoplayTimer = this.setTimeout(() => {
      if (!this.props.infinite && ( this.state.selectedIndex === this.state.count - 1)) {
        return this.setState({autoplayEnd: true});
      }
      this.scrollNextPage();
    }, this.props.autoplayTimeout * 1000);
  },

  onScrollBegin(e) {
    this.setState({isScrolling: true});

    this.setTimeout(() => {
      if (this.props.onScrollBeginDrag) {
        this.props.onScrollBeginDrag(e, this.state, this);
      }
    });
  },

  onScrollEnd(e) {
    this.setState({isScrolling: false});

    // android incompatible
    if (!e.nativeEvent.contentOffset) {
      e.nativeEvent.contentOffset = {x: e.nativeEvent.position * this.state.width};
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
    const {offset, selectedIndex, count} = this.state;
    const previousOffset = offset.x;
    const newOffset = e.nativeEvent.x;

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

    // Do nothing if offset no change.
    if (!diff) {
      return;
    }

    selectedIndex = parseInt(selectedIndex + Math.round(diff / step), 10);

    if (this.props.infinite) {
      if (selectedIndex <= -1) {
        selectedIndex = state.count - 1;
        offset.x = step * state.count;
        loopJump = true;
      } else if (selectedIndex >= state.count) {
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
  },

  scrollNextPage() {
    if (this.state.isScrolling || this.state.count < 2) {
      return;
    }
    let state = this.state;
    let diff = (this.props.infinite ? 1 : 0) + this.state.selectedIndex + 1;
    let x = 0;
    let y = 0;
    x = diff * state.width;

    if (Platform.OS === 'android') {
      (this.refs as any).scrollview.setPage(diff);
    } else {
      (this.refs as any).scrollview.scrollTo({x, y});
    }

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
    if (Platform.OS === 'ios') {
      return (
        <ScrollView ref="scrollview"
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
                    onScrollBeginDrag={this.onScrollBegin}
                    onMomentumScrollEnd={this.onScrollEnd}
                    onScrollEndDrag={this.onScrollEndDrag}>
          {pages}
        </ScrollView>
      );
    } else {
      return (
        <ViewPagerAndroid
          {...this.props}
          ref="scrollview"
          initialPage={this.props.infinite ? this.state.selectedIndex + 1 : this.state.selectedIndex}
          onPageSelected={this.onScrollEnd}
          style={{flex: 1}}
        >
          {pages}
        </ViewPagerAndroid>
      );
    }
  },

  renderDots(index) {
    return (
      <Pagination
        style={styles.pagination}
        current={index}
        mode="pointer"
        total={this.state.count}
      />
    );
  },

  render() {
    let state = this.state;
    let props = this.props;
    let children = props.children;
    let selectedIndex = state.selectedIndex;
    let count = state.count;
    let infinite = props.infinite;
    let loopVal = infinite ? 1 : 0;

    let pages: any = [];

    let pageStyle = [{width: state.width, height: state.height}, styles.slide];
    let pageStyleLoading = {
      width: this.state.width,
      height: this.state.height,
      justifyContent: 'center',
      alignItems: 'center',
    } as ViewStyle;

    if (!children) {
      return (
        <Text style={{backgroundColor: 'white'}}>
          You are supposed to add children inside Carousel
        </Text>
      );
    }

    // For make infinite at least count > 1
    if (count > 1) {
      pages = Object.keys(children);
      if (infinite) {
        pages.unshift(count - 1 + '');
        pages.push('0');
      }

      pages = pages.map((page, i) => {
        if (props.loadMinimal) {
          if (i >= (selectedIndex + loopVal - props.loadMinimalSize)
            && i <= (selectedIndex + loopVal + props.loadMinimalSize)
          ) {
            return (<View style={pageStyle} key={i}>{children[page]}</View>);
          } else {
            return (<View style={pageStyleLoading} key={`loading-${i}`}><ActivityIndicator /></View>);
          }
        } else {
          return (<View style={pageStyle} key={i}>{children[page]}</View>);
        }
      });
    } else {
      pages = (<View style={pageStyle}>{children}</View>);
    }

    return (
      <View style={[styles.container, {
        width: state.width,
        height: state.height,
      }]}>
        {this.renderContent(pages)}
        {props.dots && this.renderDots(this.state.selectedIndex)}
      </View>
    );
  },
});

export default ViewPager;
