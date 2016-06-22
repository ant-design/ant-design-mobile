var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import Animate from 'rc-animate';
import ScrollNumber from './ScrollNumber';
import classNames from 'classnames';
export default class Badge extends React.Component {
    render() {
        let { text, prefixCls, overflowCount, className, style, children } = this.props;
        const dot = this.props.dot;
        const size = this.props.size;
        const corner = this.props.corner;
        text = text > overflowCount ? `${overflowCount}+` : text;
        // dot mode don't need text
        if (dot) {
            text = '';
        }
        // null undefined "" "0" 0
        const hidden = (!text || text === '0') && !dot;
        const scrollNumberCls = classNames({
            [`${prefixCls}-dot`]: dot,
            [`${prefixCls}-dot-large`]: dot && (size === 'large'),
            [`${prefixCls}-text`]: !dot && !corner,
            [`${prefixCls}-corner`]: corner,
            [`${prefixCls}-corner-large`]: corner && (size === 'large'),
        });
        const badgeCls = classNames({
            [className]: !!className,
            [prefixCls]: true,
            [`${prefixCls}-not-a-wrapper`]: !children,
            [`${prefixCls}-corner-wrapper`]: corner,
            [`${prefixCls}-corner-wrapper-large`]: corner && (size === 'large'),
        });
        return (React.createElement("span", __assign({className: badgeCls, title: text}, this.props, {style: null}), children, React.createElement(Animate, {component: "", showProp: "data-show", transitionName: `${prefixCls}-zoom`, transitionAppear: true}, hidden ? null :
            React.createElement(ScrollNumber, {"data-show": !hidden, className: scrollNumberCls, count: text, style: style}))));
    }
}
Badge.propTypes = {
    prefixCls: PropTypes.string,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    dot: PropTypes.bool,
    corner: PropTypes.bool,
    overflowCount: PropTypes.number,
    size: PropTypes.string,
};
Badge.defaultProps = {
    prefixCls: 'am-badge',
    text: null,
    dot: false,
    corner: false,
    overflowCount: 99,
    size: null,
};
