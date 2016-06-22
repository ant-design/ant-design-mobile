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
export default class FlexItem extends React.Component {
    render() {
        let [{ children, className, prefixCls }, restProps] = splitObject(this.props, ['children', 'className', 'prefixCls']);
        const wrapCls = classNames({
            [`${prefixCls}-item`]: true,
            [className]: className
        });
        return (React.createElement("div", __assign({}, restProps, {className: wrapCls}), children));
    }
}
FlexItem.propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
};
FlexItem.defaultProps = {
    prefixCls: 'am-flexbox'
};
