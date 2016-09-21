import React from 'react';
import MListView from 'rmc-list-view';
import List from '../list';
import MyScroller from './MyScroller';
import splitObject from '../_util/splitObject';
import tsPropsType from './PropsType';

const { Item } = List;
const MListViewIndexedList = MListView.IndexedList;

export default class IndexedList extends React.Component<tsPropsType, any> {
  static defaultProps = {
    prefixCls: 'am-indexed-list',
  };

  render() {
    let [{renderSectionHeader, renderRow}, restProps] = splitObject(this.props,
    ['renderSectionHeader', 'renderRow']);
    const extraProps = {
      renderSectionHeader: null as any,
    };
    if (renderSectionHeader) {
      extraProps.renderSectionHeader =
        (sectionData, sectionID) => <Item>{renderSectionHeader(sectionData, sectionID)}</Item>;
    }
    return (
      <MListViewIndexedList
        {...restProps}
        {...extraProps}
        renderScrollComponent={props => <MyScroller {...props} />}
        renderRow={renderRow}
      >{this.props.children}</MListViewIndexedList>
    );
  }
}
