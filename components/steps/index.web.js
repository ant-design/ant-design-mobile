var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import RcSteps from 'rc-steps';
export default class Steps extends React.Component {
    render() {
        let maxDescriptionWidth = this.props.maxDescriptionWidth;
        if (this.props.direction === 'vertical') {
            maxDescriptionWidth = 'auto';
        }
        return (React.createElement(RcSteps, __assign({}, this.props, {maxDescriptionWidth: maxDescriptionWidth})));
    }
}
Steps.Step = RcSteps.Step;
Steps.defaultProps = {
    prefixCls: 'am-steps',
    iconPrefix: 'ant',
    maxDescriptionWidth: 100,
    labelPlacement: 'vertical',
    current: 0,
};
