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
import Icon from '../icon';
import splitObject from '../_util/splitObject';
export default class Item extends React.Component {
    render() {
        let [{ children, className, prefixCls, iconName, disabled }, restProps] = splitObject(this.props, ['children', 'className', 'prefixCls', 'iconName', 'disabled']);
        const cls = {
            [className]: className,
            [`${prefixCls}-item`]: true,
            [`${prefixCls}-item-disabled`]: disabled,
        };
        return (React.createElement("div", __assign({className: classNames(cls)}, restProps), iconName ? React.createElement("span", {className: `${prefixCls}-item-icon`}, React.createElement(Icon, {type: iconName})) : null, React.createElement("span", {className: `${prefixCls}-item-content`}, children)));
    }
}
Item.propTypes = {
    prefixCls: PropTypes.string,
    iconName: PropTypes.string,
    disabled: PropTypes.bool,
};
Item.defaultProps = {
    prefixCls: 'am-floatmenu',
    disabled: false,
};
Item.FloatMenuItem = true;
