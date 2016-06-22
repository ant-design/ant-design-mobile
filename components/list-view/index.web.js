var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import MListView, { DataSource } from 'rmc-list-view';
import List, { Header, Body, Footer, Item } from '../list';
import splitObject from '../_util/splitObject';
export default class ListView extends React.Component {
    render() {
        let [{ renderHeader, renderFooter, renderSectionHeader, renderRow }, restProps] = splitObject(this.props, ['renderHeader', 'renderFooter', 'renderSectionHeader', 'renderRow']);
        return (React.createElement(MListView, __assign({}, restProps, {renderScrollComponent: props => React.createElement(List, __assign({}, props)), renderHeader: () => React.createElement(Header, null, renderHeader()), renderFooter: () => React.createElement(Footer, null, renderFooter()), renderSectionHeader: (sectionData, sectionID) => React.createElement(Item, null, renderSectionHeader(sectionData, sectionID)), renderRow: renderRow, renderBodyComponent: () => React.createElement(Body, null)})));
    }
}
ListView.DataSource = DataSource;
ListView.IndexedList = require('./Indexed.web');
