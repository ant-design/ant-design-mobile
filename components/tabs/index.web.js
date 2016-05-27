import React, { PropTypes } from 'react';
import classNames from 'classnames';
import RcTabs from 'rc-tabs';

export default class Tabs extends React.Component {
  static TabPane = RcTabs.TabPane;

  static propTypes = {
    type: PropTypes.oneOf(['line', 'capsule']),
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
    let { prefixCls, type, children, onChange, onTabClick, animation } = this.props;
    let className = classNames({
      [this.props.className]: !!this.props.className,
      [`${prefixCls}-${type}`]: true,
    });

    return (
      <RcTabs {...this.props}
        className={className}
        onChange={onChange}
        animation = {animation || ''}
        onTabClick={onTabClick}>
        {children}
      </RcTabs>
    );
  }
}
