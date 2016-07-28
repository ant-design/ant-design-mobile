import * as React from 'react';
import MListView from 'rmc-list-view';
import List from '../list';
import MyList from './MyList';
import splitObject from '../_util/splitObject';
import tsPropsType from './PropsType';

const { DataSource } = MListView;
const { Header, Body, Footer, Item } = List;

export default class ListView extends React.Component<tsPropsType, any> {
  static propTypes = {
    dataSource: React.PropTypes.object,
  };
  static DataSource = DataSource;
  static IndexedList = require('./Indexed.web');
  render() {
    let [{renderHeader, renderFooter, renderSectionHeader, renderRow}, restProps] = splitObject(this.props,
      ['renderHeader', 'renderFooter', 'renderSectionHeader', 'renderRow']);
    const extraProps = {
      renderHeader: null as any,
      renderFooter: null as any,
      renderSectionHeader: null as any,
    };
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
