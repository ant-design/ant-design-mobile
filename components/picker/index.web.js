var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import PopupCascader from 'rmc-cascader/lib/Popup';
import treeFilter from 'array-tree-filter';
function getDefaultProps() {
    const defaultFormat = (values) => {
        return values.join(',');
    };
    return {
        prefixCls: 'am-picker',
        pickerPrefixCls: 'am-picker-picker',
        popupPrefixCls: 'am-picker-popup',
        format: defaultFormat,
        style: { left: 0, bottom: 0 },
        cols: 3,
        value: [],
        extra: '请选择',
        okText: '确定',
        dismissText: '取消',
        title: '',
    };
}
export default class Picker extends React.Component {
    constructor(...args) {
        super(...args);
        this.getSel = () => {
            const value = this.props.value || [];
            const treeChildren = treeFilter(this.props.data, (c, level) => {
                return c.value === value[level];
            });
            return this.props.format(treeChildren.map((v) => {
                return v.label;
            }));
        };
    }
    render() {
        const { data, value, okText, dismissText, title, extra } = this.props;
        const extraProps = {
            extra: this.getSel() || extra,
        };
        const childEl = React.cloneElement(this.props.children, extraProps);
        return (React.createElement(PopupCascader, __assign({WrapComponent: "div", popupTransitionName: "am-slide-fade", maskTransitionName: "am-fade", data: data, value: value, dismissText: dismissText, title: title, okText: okText}, this.props), childEl));
    }
}
Picker.propTypes = {
    format: PropTypes.func,
};
Picker.defaultProps = getDefaultProps();
