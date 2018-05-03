import * as React from 'react';
import MListView from 'rmc-list-view';
import handleProps from './handleProps';
import IndexedList from './Indexed';
import { ListViewPropsType } from './PropsType';

export interface ListViewProps extends ListViewPropsType {
  onQuickSearch?: (sectionID: any, topId?: any) => void;
  quickSearchBarStyle?: React.CSSProperties;
  quickSearchBarTop?: {
    value: string;
    label: string;
  };
  delayTime?: number;
  delayActivityIndicator?: any;
}

export default class ListView extends React.Component<ListViewProps, any> {
  static defaultProps = {
    prefixCls: 'am-list-view',
    listPrefixCls: 'am-list',
  };
  static DataSource = MListView.DataSource;
  static IndexedList = IndexedList;

  listviewRef: any;

  scrollTo = (...args: any[]) => this.listviewRef.scrollTo(...args);
  getInnerViewNode = () => this.listviewRef.getInnerViewNode();

  render() {
    const { restProps, extraProps } = handleProps(this.props, false);
    return (
      <MListView
        ref={(el: any) => (this.listviewRef = el)}
        {...restProps}
        {...extraProps}
      />
    );
  }
}
