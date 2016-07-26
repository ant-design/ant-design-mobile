import * as React from 'react';
import MListView, { DataSource } from 'rmc-list-view';
import { Header, Body, Footer, Item } from '../list';
import MyList from './MyList';
import splitObject from '../_util/splitObject';
import tsPropsType from './PropsType';

export default class ListView extends React.Component<tsPropsType, any> {
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
        renderScrollComponent={props => <MyList {...props} />}
        renderRow={renderRow}
        renderBodyComponent={() => <Body />} />
    );
  }
}

ListView.DataSource = DataSource;
ListView.IndexedList = require('./Indexed.web');
