import React from 'react';

interface Props {
  children?: any;
  refreshControl?: any;
  onScroll?: Function;
  scrollEventThrottle?: number;
  removeClippedSubviews?: boolean; // offscreen views are removed
  dataSource: any;
  renderSeparator?: Function;
  renderRow: Function;
  initialListSize?: number;
  onEndReached?: Function;
  onEndReachedThreshold?: number;
  pageSize?: number;
  renderFooter?: Function;
  renderHeader?: Function;
  renderSectionHeader?: Function;
  renderScrollComponent?: Function;
  scrollRenderAheadDistance?: number;
  onChangeVisibleRows?: Function;
  /** below web only */
  className?: string;
  prefixCls?: string;
  listPrefixCls?: string;
  listViewPrefixCls?: string;
  style?: React.CSSProperties;
  contentContainerStyle?: React.CSSProperties;
  renderBodyComponent?: Function;
  renderSectionBodyWrapper?: Function;
  sectionBodyClassName?: string;
  useZscroller?: boolean;
  useBodyScroll?: boolean;
  stickyHeader?: boolean;
  stickyProps?: any; // https://github.com/captivationsoftware/react-sticky/blob/master/README.md#sticky--props
  stickyContainerProps?: any;
  scrollerOptions?: any;
  /** below web only, work at `ListView.IndexedList` */
  onQuickSearch?: Function;
  quickSearchBarStyle?: React.CSSProperties;
  quickSearchBarTop?: Object;
  delayTime?: number;
  delayActivityIndicator?: any;
}

export default Props;
