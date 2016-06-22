var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import MListView from 'rmc-list-view';
import List, { Header, Body, Footer, Item } from '../list';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';
export default class IndexedList extends React.Component {
    constructor(...args) {
        super(...args);
        this.sectionComponents = {};
        this.onQuickSearchTop = (sectionID, topId) => {
            if (this.props.stickyHeader) {
                window.document.body.scrollTop = 0;
            }
            else {
                ReactDOM.findDOMNode(this.refs.indexedListView.refs.listviewscroll).scrollTop = 0;
            }
            this.props.onQuickSearch(sectionID, topId);
        };
        this.onQuickSearch = (sectionID) => {
            const lv = ReactDOM.findDOMNode(this.refs.indexedListView.refs.listviewscroll);
            let sec = ReactDOM.findDOMNode(this.sectionComponents[sectionID]);
            if (this.props.stickyHeader) {
                // react-sticky 会把 header 设置为 fixed ，但提供了 placeholder 记忆原来位置
                const stickyComponent = this.refs.indexedListView.stickyRefs[sectionID];
                if (stickyComponent && stickyComponent.refs.placeholder) {
                    sec = ReactDOM.findDOMNode(stickyComponent.refs.placeholder);
                }
                window.document.body.scrollTop = sec.getBoundingClientRect().top - lv.getBoundingClientRect().top;
            }
            else {
                lv.scrollTop += sec.getBoundingClientRect().top - lv.getBoundingClientRect().top;
            }
            this.props.onQuickSearch(sectionID);
        };
    }
    renderQuickSearchBar(quickSearchBarTop) {
        const { dataSource, prefixCls } = this.props;
        const sectionKvs = dataSource.sectionIdentities.map(i => {
            return {
                value: i,
                label: dataSource._getSectionHeaderData(dataSource._dataBlob, i),
            };
        });
        return (React.createElement("ul", {className: `${prefixCls}-quick-search-bar`}, React.createElement("li", {onClick: () => this.onQuickSearchTop(undefined, quickSearchBarTop.value)}, quickSearchBarTop.label), sectionKvs.map(i => {
            return (React.createElement("li", {key: i.value, onClick: () => this.onQuickSearch(i.value)}, i.label));
        })));
    }
    render() {
        let [{ className, prefixCls, children, quickSearchBarTop, renderHeader, renderFooter, renderSectionHeader, renderRow }, restProps] = splitObject(this.props, ['className', 'prefixCls', 'children', 'quickSearchBarTop',
            'renderHeader', 'renderFooter', 'renderSectionHeader', 'renderRow']);
        const wrapCls = classNames({
            [className]: className,
            [prefixCls]: true,
        });
        return (React.createElement(MListView, __assign({}, restProps, {ref: "indexedListView", className: wrapCls, initialListSize: this.props.dataSource.getRowCount(), renderScrollComponent: props => React.createElement(List, __assign({}, props)), renderHeader: () => React.createElement(Header, null, renderHeader()), renderFooter: () => React.createElement(Footer, null, renderFooter()), renderSectionHeader: (sectionData, sectionID) => React.createElement(Item, {ref: c => { this.sectionComponents[sectionID] = c; }}, renderSectionHeader(sectionData, sectionID)), renderRow: renderRow, renderBodyComponent: () => React.createElement(Body, null)}), this.renderQuickSearchBar(quickSearchBarTop), children));
    }
}
IndexedList.propTypes = {
    prefixCls: PropTypes.string,
    quickSearchBarTop: PropTypes.object,
    onQuickSearch: PropTypes.func,
};
IndexedList.defaultProps = {
    prefixCls: 'am-indexed-list',
    quickSearchBarTop: { value: '#', label: '#' },
    onQuickSearch: () => { },
};
