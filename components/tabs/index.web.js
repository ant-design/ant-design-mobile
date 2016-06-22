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
import RcTabs from 'rc-tabs';
export default class Tabs extends React.Component {
    render() {
        let { prefixCls, type, children, onChange, onTabClick, tabPosition, animation, mode } = this.props;
        let className = classNames({
            [this.props.className]: !!this.props.className,
            [`${prefixCls}-${type}`]: true,
            [`${prefixCls}-${mode}`]: type === 'tabbar',
        });
        tabPosition = type !== 'tabbar' ? tabPosition : 'bottom';
        animation = (type === 'tabbar' || !animation) ? '' : animation;
        return (React.createElement(RcTabs, __assign({}, this.props, {className: className, onChange: onChange, tabPosition: tabPosition, animation: animation, onTabClick: onTabClick}), children));
    }
}
Tabs.TabPane = RcTabs.TabPane;
Tabs.propTypes = {
    type: PropTypes.oneOf(['line', 'capsule', 'tabbar']),
    activeKey: PropTypes.string,
    defaultActiveKey: PropTypes.string,
    onChange: PropTypes.func,
    onTabClick: PropTypes.func,
    animation: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    mode: PropTypes.oneOf(['dark', 'light']),
};
Tabs.defaultProps = {
    prefixCls: 'am-tab',
    animation: 'slide-horizontal',
    type: 'line',
    mode: 'light',
    onChange() { },
    onTabClick() { },
};
