var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import RcCollapse from 'rc-collapse';
export default class Collapse extends React.Component {
    render() {
        return React.createElement(RcCollapse, __assign({}, this.props));
    }
}
Collapse.Panel = RcCollapse.Panel;
Collapse.defaultProps = {
    prefixCls: 'am-collapse',
};
