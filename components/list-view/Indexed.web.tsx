import * as React from 'react';
import { PropTypes } from 'react';
import MListView from 'rmc-list-view';
import { Header, Body, Footer, Item } from '../list';
import MyList from './MyList';
import splitObject from '../_util/splitObject';
import tsPropsType from './PropsType';

const MListViewIndexedList = MListView.IndexedList;

export default class IndexedList extends React.Component<tsPropsType, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'am-indexed-list',
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
      <MListViewIndexedList
        {...restProps}
        {...extraProps}
        renderScrollComponent={props => <MyList {...props} />}
        renderRow={renderRow}
        renderBodyComponent={() => <Body />}
      >{this.props.children}</MListViewIndexedList>
    );
  }
}
