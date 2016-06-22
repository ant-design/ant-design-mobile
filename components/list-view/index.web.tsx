import React from 'react';
import MListView, { DataSource } from 'rmc-list-view';
import List, { Header, Body, Footer, Item } from '../list';

export default class ListView extends React.Component {
  render() {
    const { renderHeader, renderFooter, renderSectionHeader, renderRow, ...other } = this.props;
    const extraProps = {};
    if (renderHeader) {
      extraProps.renderHeader = () => <Header>{renderHeader()}</Header>;
    }
    if (renderFooter) {
      extraProps.renderFooter = () => <Footer>{renderFooter()}</Footer>;
    }
    if (renderSectionHeader) {
      extraProps.renderSectionHeader =
        (sectionData, sectionID) => <Item>{renderSectionHeader(sectionData, sectionID)}</Item>;
    }
    return (
      <MListView
        {...other}
        {...extraProps}
        renderScrollComponent={props => <List {...props} />}
        renderRow={renderRow}
        renderBodyComponent={() => <Body />} />
    );
  }
}

ListView.DataSource = DataSource;
ListView.IndexedList = require('./Indexed.web');
