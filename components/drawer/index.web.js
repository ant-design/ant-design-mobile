var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import RcDrawer from 'rc-drawer';
import splitObject from '../_util/splitObject';
// function noop() {}
export default class Drawer extends React.Component {
    render() {
        let [{ prefixCls, children }, restProps] = splitObject(this.props, ['prefixCls', 'children']);
        return (React.createElement(RcDrawer, __assign({prefixCls: prefixCls}, restProps), children));
    }
}
Drawer.propTypes = {
    prefixCls: PropTypes.string,
    enableDragHandle: PropTypes.bool,
};
Drawer.defaultProps = {
    prefixCls: 'am-drawer',
    enableDragHandle: false,
};
