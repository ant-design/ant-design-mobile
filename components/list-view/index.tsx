import React from 'react';
import MListView from 'rmc-list-view';
import tsPropsType from './PropsType';
import handleProps from './handleProps';
import IndexedList from './Indexed';

export interface ListViewPropsType extends tsPropsType {
  onQuickSearch?: Function;
  quickSearchBarStyle?: React.CSSProperties;
  quickSearchBarTop?: Object;
  delayTime?: number;
  delayActivityIndicator?: any;
}

export default class ListView extends React.Component<ListViewPropsType, any> {
  static defaultProps = {
    prefixCls: 'am-list-view',
    listPrefixCls: 'am-list',
  };
  static DataSource = MListView.DataSource;
  static IndexedList = IndexedList;

  listviewRef: any;

  scrollTo = (...args) => this.listviewRef.scrollTo(...args);
  getInnerViewNode = () => this.listviewRef.getInnerViewNode();

  render() {
    const { restProps, extraProps } = handleProps(this.props, false);
    return <MListView ref={el => this.listviewRef = el} {...restProps} {...extraProps} />;
  }
}
