import React from 'react';
import MListView, { DataSource } from 'rmc-list-view';
import List, { Header, Body, Footer, Item } from '../list';
import splitObject from '../_util/splitObject';
export default class ListView extends React.Component {
  render() {
    let [{renderHeader, renderFooter, renderSectionHeader, renderRow}, restProps] = splitObject(this.props,
      ['renderHeader', 'renderFooter', 'renderSectionHeader','renderRow']);
    return (
      <MListView
        {...restProps}
        renderScrollComponent={props => <List {...props} />}
        renderHeader={() => <Header>{renderHeader()}</Header>}
        renderFooter={() => <Footer>{renderFooter()}</Footer>}
        renderSectionHeader={(sectionData, sectionID) => <Item>{renderSectionHeader(sectionData, sectionID)}</Item>}
        renderRow={renderRow}
        renderBodyComponent={() => <Body />} />
    );
  }
}

ListView.DataSource = DataSource;
ListView.IndexedList = require('./Indexed.web');
