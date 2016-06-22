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
import Icon from '../icon';
import splitObject from '../_util/splitObject';
export default class NavBar extends React.Component {
    render() {
        let [{ prefixCls, children, mode, className, iconName, leftContent, rightContent, onLeftClick }, restProps] = splitObject(this.props, ['prefixCls', 'children', 'mode', 'className',
            'iconName', 'leftContent', 'rightContent', 'onLeftClick']);
        const wrapCls = classNames({
            [className]: className,
            [prefixCls]: true,
            [`${prefixCls}-${mode}`]: true,
        });
        return (React.createElement("div", __assign({}, restProps, {className: wrapCls}), React.createElement("div", {className: `${prefixCls}-left`, onClick: onLeftClick}, iconName ? React.createElement("span", {className: `${prefixCls}-left-icon`}, React.createElement(Icon, {type: iconName})) : null, React.createElement("span", {className: `${prefixCls}-left-content`}, leftContent)), React.createElement("div", {className: `${prefixCls}-title`}, children), React.createElement("div", {className: `${prefixCls}-right`}, rightContent)));
    }
}
NavBar.propTypes = {
    prefixCls: PropTypes.string,
    children: PropTypes.any,
    mode: PropTypes.oneOf(['dark', 'light']),
    iconName: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    leftContent: PropTypes.any,
    rightContent: PropTypes.any,
    onLeftClick: PropTypes.func,
};
NavBar.defaultProps = {
    prefixCls: 'am-navbar',
    mode: 'dark',
    iconName: 'left',
    onLeftClick() {
    },
};
