import React, { PropTypes } from 'react';
import MListView from 'rmc-list-view';
import List, { Header, Body, Footer, Item } from '../list';

export default class IndexedList extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
  }

  static defaultProps = {
    prefixCls: 'am-indexed-list',
  }

  render() {
    const { children, renderHeader, renderFooter, renderSectionHeader, renderRow} = this.props;
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
      <MListView.IndexedList
        {...this.props}
        {...extraProps}
        renderScrollComponent={props => <List {...props} />}
        renderRow={renderRow}
        renderBodyComponent={() => <Body />}
      >{children}</MListView.IndexedList>
    );
  }
}
