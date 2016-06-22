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
function noop() { }
export default class Radio extends React.Component {
    render() {
        return (React.createElement(RcCheckbox, __assign({}, this.props, {type: "radio"})));
    }
}
Radio.propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
};
Radio.defaultProps = {
    prefixCls: 'am-radio',
    name: '',
    checked: false,
    disabled: false,
    onChange: noop,
};
