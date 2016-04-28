import React, { PropTypes } from 'react';
import classNames from 'classnames';
import RcTabs from 'rc-tabs';

export default class Tabs extends React.Component {
  static TabPane = RcTabs.TabPane;

  static propTypes = {
    type: PropTypes.oneOf(['line', 'capsule']),
    activeKey: PropTypes.string,
    defaultActiveKey: PropTypes.string,
    size: PropTypes.string,
    onTabClick: PropTypes.func,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    prefixCls: 'am-tab',
    animation: 'slide-horizontal',
    type: 'line',
  }

  render() {
    let { prefixCls, size, animation, type, children, handleChange } = this.props;
    let className = classNames({
      [this.props.className]: !!this.props.className,
      [`${prefixCls}-mini`]: size === 'small' || size === 'mini',
      [`${prefixCls}-${type}`]: true,
    });

    return (
      <RcTabs {...this.props}
        className={className}
        onChange={handleChange}
        animation={animation}>
        {children}
      </RcTabs>
    );
  }
}
