import React, { PropTypes } from 'react';
import classNames from 'classnames';
import RcTabs from 'rc-tabs';

export default class Tabs extends React.Component {
  static TabPane = RcTabs.TabPane;

  static propTypes = {
    type: PropTypes.oneOf(['line', 'capsule', 'bar']),
    activeKey: PropTypes.string,
    defaultActiveKey: PropTypes.string,
    onChange: PropTypes.func,
    onTabClick: PropTypes.func,
    animation: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }

  static defaultProps = {
    prefixCls: 'am-tab',
    animation: 'slide-horizontal',
    type: 'line',
    onChange() {},
    onTabClick() {},
  }

  render() {
    let { prefixCls, type, children, onChange, onTabClick, tabPosition, animation } = this.props;
    let className = classNames({
      [this.props.className]: !!this.props.className,
      [`${prefixCls}-${type}`]: true,
    });

    tabPosition = type !== 'bar' ? tabPosition : 'bottom';
    animation = (type === 'bar' || !animation) ? '' : animation;

    return (
      <RcTabs {...this.props}
        className={className}
        onChange={onChange}
        tabPosition={tabPosition}
        animation = {animation}
        onTabClick={onTabClick}>
        {children}
      </RcTabs>
    );
  }
}
