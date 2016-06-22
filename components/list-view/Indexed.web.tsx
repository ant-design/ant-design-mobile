import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import MListView from 'rmc-list-view';
import List, { Header, Body, Footer, Item } from '../list';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';
export default class IndexedList extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    quickSearchBarTop: PropTypes.object,
    onQuickSearch: PropTypes.func,
  }

  static defaultProps = {
    prefixCls: 'am-indexed-list',
    quickSearchBarTop: { value: '#', label: '#' },
    onQuickSearch: () => {},
  }

  sectionComponents = {}

  onQuickSearchTop = (sectionID, topId) => {
    if (this.props.stickyHeader) {
      window.document.body.scrollTop = 0;
    } else {
      ReactDOM.findDOMNode(this.refs.indexedListView.refs.listviewscroll).scrollTop = 0;
    }
    this.props.onQuickSearch(sectionID, topId);
  }
  onQuickSearch = (sectionID) => {
    const lv = ReactDOM.findDOMNode(this.refs.indexedListView.refs.listviewscroll);
    let sec = ReactDOM.findDOMNode(this.sectionComponents[sectionID]);
    if (this.props.stickyHeader) {
      // react-sticky 会把 header 设置为 fixed ，但提供了 placeholder 记忆原来位置
      const stickyComponent = this.refs.indexedListView.stickyRefs[sectionID];
      if (stickyComponent && stickyComponent.refs.placeholder) {
        sec = ReactDOM.findDOMNode(stickyComponent.refs.placeholder);
      }
      window.document.body.scrollTop = sec.getBoundingClientRect().top - lv.getBoundingClientRect().top;
    } else {
      lv.scrollTop += sec.getBoundingClientRect().top - lv.getBoundingClientRect().top;
    }
    this.props.onQuickSearch(sectionID);
  }

  renderQuickSearchBar(quickSearchBarTop) {
    const { dataSource, prefixCls } = this.props;
    const sectionKvs = dataSource.sectionIdentities.map(i => {
      return {
        value: i,
        label: dataSource._getSectionHeaderData(dataSource._dataBlob, i),
      };
    });
    return (<ul className={`${prefixCls}-quick-search-bar`}>
      <li onClick={() => this.onQuickSearchTop(undefined, quickSearchBarTop.value)}>{quickSearchBarTop.label}</li>
      {sectionKvs.map(i => {
        return (
          <li key={i.value} onClick={() => this.onQuickSearch(i.value)}>{i.label}</li>
        );
      })}
    </ul>);
  }

  render() {
    let [{className, prefixCls, children, quickSearchBarTop,
      renderHeader, renderFooter, renderSectionHeader, renderRow}, restProps] = splitObject(this.props,
      ['className', 'prefixCls', 'children','quickSearchBarTop',
        'renderHeader', 'renderFooter', 'renderSectionHeader','renderRow']);
    const wrapCls = classNames({
      [className]: className,
      [prefixCls]: true,
    });
    return (
      <MListView
        {...restProps}
        ref="indexedListView"
        className={wrapCls}
        initialListSize={this.props.dataSource.getRowCount()}
        renderScrollComponent={props => <List {...props} />}
        renderHeader={() => <Header>{renderHeader()}</Header>}
        renderFooter={() => <Footer>{renderFooter()}</Footer>}
        renderSectionHeader={(sectionData, sectionID) => <Item
          ref={c => {this.sectionComponents[sectionID] = c;}}
          >
          {renderSectionHeader(sectionData, sectionID)}</Item>
        }
        renderRow={renderRow}
        renderBodyComponent={() => <Body />}
      >{this.renderQuickSearchBar(quickSearchBarTop)}{children}</MListView>
    );
  }
}
