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
export default class WhiteSpace extends React.Component {
    render() {
        let [{ prefixCls, mode, className }, restProps] = splitObject(this.props, ['prefixCls', 'mode', 'className']);
        let wrapCls = classNames({
            [`${prefixCls}`]: true,
            [className]: className
        });
        wrapCls += ` ${prefixCls}-ws${mode}`;
        return (React.createElement("div", __assign({}, restProps, {className: wrapCls})));
    }
}
WhiteSpace.propTypes = {
    prefixCls: PropTypes.string,
    mode: PropTypes.oneOf([4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48]),
};
WhiteSpace.defaultProps = {
    prefixCls: 'am-whitespace',
    mode: 8,
};
