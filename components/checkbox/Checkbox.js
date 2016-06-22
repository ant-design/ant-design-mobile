var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import RcCheckbox from 'rc-checkbox';
import splitObject from '../_util/splitObject';
function noop() { }
export default class Checkbox extends React.Component {
    render() {
        let [{ prefixCls, style, name, checked, disabled, className, onChange }, restProps] = splitObject(this.props, ['prefixCls', 'style', 'name', 'checked', 'disabled', 'className', 'onChange']);
        return (React.createElement(RcCheckbox, __assign({}, restProps, {prefixCls: prefixCls, className: className, style: style, defaultChecked: checked, name: name, onChange: onChange, disabled: disabled})));
    }
}
Checkbox.propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
};
Checkbox.defaultProps = {
    prefixCls: 'am-checkbox',
    name: '',
    checked: false,
    disabled: false,
    onChange: noop,
};
