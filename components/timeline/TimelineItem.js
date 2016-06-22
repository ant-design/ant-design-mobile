var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';
export default class TimelineItem extends React.Component {
    render() {
        let [{ prefixCls, color, last, children, pending, className }, restProps] = splitObject(this.props, ['prefixCls', 'color', 'last', 'children', 'pending', 'className']);
        const itemClassName = classNames({
            [`${prefixCls}-item`]: true,
            [`${prefixCls}-item-last`]: last,
            [`${prefixCls}-item-pending`]: pending,
            [className]: className,
        });
        return (React.createElement("li", __assign({}, restProps, {className: itemClassName}), React.createElement("div", {className: `${prefixCls}-item-tail`}), React.createElement("div", {className: `${prefixCls}-item-head ${prefixCls}-item-head-${color}`}), React.createElement("div", {className: `${prefixCls}-item-content`}, children)));
    }
}
TimelineItem.defaultProps = {
    prefixCls: 'am-timeline',
    color: 'blue',
    last: false,
    pending: false,
};
