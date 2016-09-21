import React from 'react';
import MListView from 'rmc-list-view';
import List from '../list';
import MyScroller from './MyScroller';
import splitObject from '../_util/splitObject';
import tsPropsType from './PropsType';

const { DataSource } = MListView;
const { Item } = List;

export default class ListView extends React.Component<tsPropsType, any> {
  static DataSource = DataSource;
  static IndexedList = require('./Indexed.web');
  render() {
    let [{ renderSectionHeader, renderRow}, restProps] = splitObject(this.props,
      ['renderSectionHeader', 'renderRow']);
    const extraProps = {
      renderSectionHeader: null as any,
    };
    if (renderSectionHeader) {
      extraProps.renderSectionHeader =
        (sectionData, sectionID) => <Item>{renderSectionHeader(sectionData, sectionID)}</Item>;
    }
    return (
      <MListView
        {...restProps}
        {...extraProps}
        renderScrollComponent={props => <MyScroller {...props} />}
        renderRow={renderRow}
      />
    );
  }
}
