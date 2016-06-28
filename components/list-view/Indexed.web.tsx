import React, { PropTypes } from 'react';
import MListView from 'rmc-list-view';
import List, { Header, Body, Footer, Item } from '../list';
import splitObject from '../_util/splitObject';

export default class IndexedList extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
  }

  static defaultProps = {
    prefixCls: 'am-indexed-list',
  }

  render() {
    let [{renderHeader, renderFooter, renderSectionHeader, renderRow}, restProps] = splitObject(this.props,
    ['renderHeader', 'renderFooter', 'renderSectionHeader','renderRow']);
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
        {...restProps}
        {...extraProps}
        renderScrollComponent={props => <List {...props} />}
        renderRow={renderRow}
        renderBodyComponent={() => <Body />}
      >{this.props.children}</MListView.IndexedList>
    );
  }
}
