import * as React from 'react';
import MListView, { DataSource } from 'rmc-list-view';
import List, { Header, Body, Footer, Item } from '../list';
import splitObject from '../_util/splitObject';

export default class ListView extends React.Component {
  static propTypes = {
    dataSource: React.PropTypes.object,
  };
  render() {
    let [{renderHeader, renderFooter, renderSectionHeader, renderRow}, restProps] = splitObject(this.props,
      ['renderHeader', 'renderFooter', 'renderSectionHeader', 'renderRow']);
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
        {...restProps}
        {...extraProps}
        renderScrollComponent={props => <List {...props} />}
        renderRow={renderRow}
        renderBodyComponent={() => <Body />} />
    );
  }
}

ListView.DataSource = DataSource;
ListView.IndexedList = require('./Indexed.web');
