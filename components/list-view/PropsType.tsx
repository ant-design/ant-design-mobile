import * as React from 'react';
export interface ListViewPropsType {
  dataSource: any;
  initialListSize?: number;
  onEndReached?: (e?: any) => void;
  onEndReachedThreshold?: number;
  pageSize?: number;
  renderHeader?: () => React.ReactElement<any>;
  renderFooter?: () => React.ReactElement<any>;
  renderRow: (
    rowData: any,
    sectionID: string | number,
    rowID: string | number,
    highlightRow?: boolean,
  ) => React.ReactElement<any>;
  renderScrollComponent?: (p: any) => React.ReactElement<any>;
  renderSectionHeader?: (
    sectionData: any,
    sectionId: string | number,
  ) => React.ReactElement<any>;
  renderSeparator?: (
    sectionID: string | number,
    rowID: string | number,
    adjacentRowHighlighted?: boolean,
  ) => React.ReactElement<any>;
  scrollRenderAheadDistance?: number;
  horizontal?: boolean;
  onContentSizeChange?: (w: number, h: number) => void;
  onScroll?: (e?: any) => void;
  scrollEventThrottle?: number;
  onLayout?: (event: any) => void;
  style?: React.CSSProperties;
  /** The following is new added and does not exist in react-native */
  contentContainerStyle?: React.CSSProperties;
  renderBodyComponent?: () => React.ReactElement<any>;
  renderSectionWrapper?: () => React.ReactElement<any>;
  renderSectionBodyWrapper?: () => React.ReactElement<any>;
  useBodyScroll?: boolean;
  pullToRefresh?: React.ReactNode;
  className?: string;
  prefixCls?: string;
  listPrefixCls?: string;
  listViewPrefixCls?: string;
  sectionBodyClassName?: string;
}
