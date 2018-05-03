import * as React from 'react';
import MListView from 'rmc-list-view';
import handleProps from './handleProps';
import { ListViewPropsType } from './PropsType';
const IndexedList = MListView.IndexedList;

export interface MIndexedListProps extends ListViewPropsType {
  onQuickSearch?: (sectionID: any, topId?: any) => void;
  quickSearchBarStyle?: React.CSSProperties;
  quickSearchBarTop?: {
    value: string;
    label: string;
  };
  delayTime?: number;
  delayActivityIndicator?: React.ReactNode;
}

export default class MIndexedList extends React.Component<
  MIndexedListProps,
  any
> {
  static defaultProps = {
    prefixCls: 'am-indexed-list',
    listPrefixCls: 'am-list',
    listViewPrefixCls: 'am-list-view',
  };

  indexedListRef: any;

  render() {
    const { prefixCls, listPrefixCls } = this.props;
    const { restProps, extraProps } = handleProps(this.props, true);
    return (
      <IndexedList
        ref={(el: any) => (this.indexedListRef = el)}
        sectionHeaderClassName={`${prefixCls}-section-header ${listPrefixCls}-body`}
        sectionBodyClassName={`${prefixCls}-section-body ${listPrefixCls}-body`}
        {...restProps}
        {...extraProps}
      >
        {this.props.children}
      </IndexedList>
    );
  }
}
