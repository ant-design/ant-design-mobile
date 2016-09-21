import React from 'react';
import MListView from 'rmc-list-view';
import tsPropsType from './PropsType';
import handleProps from './handleProps';
const IndexedList = MListView.IndexedList;

export default class MIndexedList extends React.Component<tsPropsType, any> {
  static defaultProps = {
    prefixCls: 'am-indexed-list',
    listPrefixCls: 'am-list',
    listViewPrefixCls: 'am-list-view',
  };
  render() {
    const { restProps, extraProps } = handleProps(this.props);
    return (
      <IndexedList
        {...restProps}
        {...extraProps}
      >{this.props.children}</IndexedList>
    );
  }
}
