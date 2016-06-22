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
import TimelineItem from './TimelineItem';
import splitObject from '../_util/splitObject';
export default class Timeline extends React.Component {
    render() {
        let [{ prefixCls, children, pending, className }, restProps] = splitObject(this.props, ['prefixCls', 'children', 'pending', 'className']);
        const pendingNode = typeof pending === 'boolean' ? null : pending;
        const classString = classNames({
            [prefixCls]: true,
            [`${prefixCls}-pending`]: !!pending,
            [className]: className,
        });
        return (React.createElement("ul", __assign({}, restProps, {className: classString}), React.Children.map(children, (ele, idx) => React.cloneElement(ele, {
            last: idx === children.length - 1,
        })), (!!pending)
            ? React.createElement(TimelineItem, {pending: !!pending}, pendingNode)
            : null));
    }
}
Timeline.defaultProps = {
    prefixCls: 'am-timeline',
};
