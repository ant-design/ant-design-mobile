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
import Radio from './Radio';
import List from '../list';
import splitObject from '../_util/splitObject';
function noop() { }
export default class RadioItem extends React.Component {
    render() {
        let [{ prefixCls, listPrefixCls, style, name, checked, disabled, children, className, onChange, needActive, value }, restProps] = splitObject(this.props, ['prefixCls', 'listPrefixCls', 'style', 'name', 'checked', 'disabled',
            'children', 'className', 'onChange', 'needActive', 'value']);
        const wrapCls = classNames({
            [`${prefixCls}-item`]: true,
            [`${prefixCls}-item-disabled`]: disabled === true,
            [className]: className
        });
        return (React.createElement(List.Item, __assign({prefixCls: listPrefixCls, needActive: disabled ? false : needActive, style: style, className: wrapCls}, restProps, {extra: React.createElement(Radio, {value: value, checked: checked, name: name, onChange: onChange, disabled: disabled})}), children));
    }
}
RadioItem.propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    needActive: PropTypes.bool,
};
RadioItem.defaultProps = {
    prefixCls: 'am-radio',
    listPrefixCls: 'am-list',
    name: '',
    checked: false,
    disabled: false,
    needActive: true,
    onChange: noop,
};
