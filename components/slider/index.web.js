var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import RcSlider from 'rc-slider';
export default class Slider extends React.Component {
    render() {
        return React.createElement(RcSlider, __assign({}, this.props));
    }
}
Slider.defaultProps = {
    prefixCls: 'am-slider',
    tipTransitionName: 'zoom-down'
};
