import React from 'react';
import MListView, { DataSource } from 'rmc-list-view';
import List, { Header, Body, Footer, Item } from '../list';

export default class ListView extends React.Component {
  static propTypes = {
    // prefixCls: PropTypes.string,
  }

  static defaultProps = {
    // prefixCls: 'am-refresh-control',
  }

  render() {
    const { renderHeader, renderFooter, renderSectionHeader, renderRow, ...other } = this.props;
    return (
      <MListView
        {...other}
        renderScrollComponent={props => <List {...props} />}
        renderHeader={() => <Header>{renderHeader()}</Header>}
        renderFooter={() => <Footer>{renderFooter()}</Footer>}
        renderSectionHeader={(sectionData, sectionID) => <Item>{renderSectionHeader(sectionData, sectionID)}</Item>}
        renderRow={() => <Item>{renderRow()}</Item>}
        renderBodyComponent={() => <Body />} />
    );
  }
}

ListView.DataSource = DataSource;
