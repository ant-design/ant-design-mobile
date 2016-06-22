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
import Checkbox from './Checkbox';
import splitObject from '../_util/splitObject';
function noop() { }
export default class AgreeItem extends React.Component {
    render() {
        let [{ prefixCls, style, name, checked, disabled, children, onChange, className }, restProps] = splitObject(this.props, ['prefixCls', 'style', 'name', 'checked', 'disabled', 'children', 'onChange',
            'className']);
        const wrapCls = classNames({
            [`${prefixCls}-agree`]: true,
            [className]: className
        });
        return (React.createElement("div", __assign({}, restProps, {className: wrapCls, style: style}), React.createElement(Checkbox, {prefixCls: prefixCls, checked: checked, name: name, onChange: onChange, disabled: disabled}), React.createElement("label", {className: `${prefixCls}-agree-label`, htmlFor: name}, children)));
    }
}
AgreeItem.propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
};
AgreeItem.defaultProps = {
    prefixCls: 'am-checkbox',
    name: '',
    checked: false,
    disabled: false,
    onChange: noop,
};
