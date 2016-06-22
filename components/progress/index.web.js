var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';
export default class Progress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let [{ prefixCls, percent, position }, restProps] = splitObject(this.props, ['prefixCls', 'percent', 'position']);
        const percentStyle = {
            width: `${percent}%`,
            height: 0
        };
        const wrapCls = classNames({
            [`${prefixCls}-outer`]: true,
            [`${prefixCls}-fixed-outer`]: position === 'fixed',
        });
        return (React.createElement("div", __assign({className: wrapCls}, restProps), React.createElement("div", {className: `${prefixCls}-bar`, style: percentStyle})));
    }
}
Progress.propTypes = {
    position: PropTypes.oneOf(['fixed', 'normal']),
    percent: PropTypes.number,
};
Progress.defaultProps = {
    prefixCls: 'am-progress',
    percent: 0,
    position: 'fixed',
};
