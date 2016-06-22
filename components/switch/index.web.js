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
function noop() { }
export default class Switch extends React.Component {
    constructor(...args) {
        super(...args);
        this.onChange = (e) => {
            const checked = e.target.checked;
            this.props.onChange(checked);
        };
    }
    render() {
        let { prefixCls, style, name, checked, disabled, className } = this.props;
        const wrapCls = classNames({
            [`${prefixCls}`]: true,
            [className]: className
        });
        return (React.createElement("label", {className: wrapCls, style: style}, React.createElement("input", __assign({type: "checkbox", name: name, className: `${prefixCls}-checkbox`}, (disabled ? { disabled: 'disabled' } : ''), {checked: checked, onChange: this.onChange})), React.createElement("div", {className: "checkbox"})));
    }
}
Switch.propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
};
Switch.defaultProps = {
    prefixCls: 'am-switch',
    name: '',
    checked: false,
    disabled: false,
    onChange: noop,
};
