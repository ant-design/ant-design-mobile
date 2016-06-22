var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import PullToRefresh from 'rmc-pull-to-refresh';
import Icon from '../icon';
import splitObject from '../_util/splitObject';
export default class RefreshControl extends React.Component {
    render() {
        let [{ prefixCls, children, icon, loading }, restProps] = splitObject(this.props, ['prefixCls', 'children', 'icon', 'loading']);
        // const wrapCls = classNames({
        // });
        return (React.createElement(PullToRefresh, __assign({}, restProps, {prefixCls: prefixCls, icon: icon, loading: loading}), children));
    }
}
RefreshControl.propTypes = {
    prefixCls: PropTypes.string,
    children: PropTypes.any,
    icon: PropTypes.any,
    loading: PropTypes.any,
};
RefreshControl.defaultProps = {
    prefixCls: 'am-refresh-control',
    icon: React.createElement("div", null, React.createElement("div", {className: "pull"}, React.createElement(Icon, {type: "down"})), React.createElement("div", {className: "release"}, React.createElement(Icon, {type: "up"}))),
    loading: React.createElement(Icon, {type: "loading"}),
};
