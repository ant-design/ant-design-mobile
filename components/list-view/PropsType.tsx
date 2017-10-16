import React from 'react';

interface Props {
  dataSource: any;
  initialListSize?: number;
  onEndReached?: Function;
  onEndReachedThreshold?: number;
  pageSize?: number;
  renderHeader?: Function;
  renderFooter?: Function;
  renderRow: Function;
  renderScrollComponent?: Function;
  renderSectionHeader?: Function;
  renderSeparator?: Function;
  scrollRenderAheadDistance?: number;
  horizontal?: boolean;
  onContentSizeChange?: Function;
  onScroll?: Function;
  scrollEventThrottle?: number;
  onLayout?: Function;
  style?: any;
  /** The following is new added and does not exist in react-native */
  contentContainerStyle?: React.CSSProperties;
  renderBodyComponent?: Function;
  renderSectionWrapper?: Function;
  renderSectionBodyWrapper?: Function;
  useBodyScroll?: boolean;
  pullToRefresh?: React.ReactNode;
  className?: string;
  prefixCls?: string;
  listPrefixCls?: string;
  listViewPrefixCls?: string;
  sectionBodyClassName?: string;
}

export default Props;
