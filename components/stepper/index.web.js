var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import classNames from 'classnames';
import RcInputNumber from 'rc-input-number';
import splitObject from '../_util/splitObject';
export default class Stepper extends React.Component {
    componentDidMount() {
        this.refs.inputNumber.refs.input.setAttribute('disabled', true);
    }
    render() {
        let [{ className, size }, restProps] = splitObject(this.props, ['className', 'size']);
        const stepperClass = classNames({
            [`${this.props.prefixCls}-lg`]: size === 'large',
            [`${this.props.prefixCls}-sm`]: size === 'small',
            [className]: !!className,
            ['showNumber']: !!this.props.showNumber,
        });
        return React.createElement(RcInputNumber, __assign({ref: "inputNumber", className: stepperClass}, restProps));
    }
}
Stepper.defaultProps = {
    prefixCls: 'am-stepper',
    step: 1,
    readOnly: true,
    showNumber: false,
    size: 'small',
};
