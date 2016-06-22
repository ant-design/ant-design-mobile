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
export default class WingBlank extends React.Component {
    render() {
        let [{ prefixCls, mode, className, children }, restProps] = splitObject(this.props, ['prefixCls', 'mode', 'className', 'children']);
        let wrapCls = classNames({
            [`${prefixCls}`]: true,
            [className]: className
        });
        wrapCls += ` ${prefixCls}-wb${mode}`;
        return (React.createElement("div", __assign({}, restProps, {className: wrapCls}), children));
    }
}
WingBlank.propTypes = {
    prefixCls: PropTypes.string,
    mode: PropTypes.oneOf([4, 8, 12, 16, 20, 24, 28, 32]),
};
WingBlank.defaultProps = {
    prefixCls: 'am-wingblank',
    mode: 8,
};
