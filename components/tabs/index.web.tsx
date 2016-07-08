import React, { PropTypes } from 'react';
import classNames from 'classnames';
import RcTabs from 'rc-tabs';
import splitObject from '../_util/splitObject';

export default class Tabs extends React.Component {
  static TabPane = RcTabs.TabPane;

  static propTypes = {
    type: PropTypes.oneOf(['line', 'capsule', 'tabbar']),
    activeKey: PropTypes.string,
    defaultActiveKey: PropTypes.string,
    onChange: PropTypes.func,
    onTabClick: PropTypes.func,
    animation: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    mode: PropTypes.oneOf(['dark', 'light']),
  };

  static defaultProps = {
    prefixCls: 'am-tab',
    animation: 'slide-horizontal',
    type: 'line',
    mode: 'light',
    onChange() {},
    onTabClick() {},
  };

  render() {
    let [{
      className, prefixCls, type, children, onChange, onTabClick, tabPosition, animation, mode
    }, restProps] = splitObject(
      this.props, ['className', 'prefixCls', 'type', 'children', 'onChange', 'onTabClick', 'tabPosition', 'animation', 'mode'
    ]);

    let cls = classNames({
      [className]: !!className,
      [`${prefixCls}-${type}`]: true,
      [`${prefixCls}-${mode}`]: type === 'tabbar',
    });

    tabPosition = type !== 'tabbar' ? tabPosition : 'bottom';
    animation = (type === 'tabbar' || !animation) ? '' : animation;

    return (
      <RcTabs {...restProps}
        className={cls}
        onChange={onChange}
        tabPosition={tabPosition}
        animation = {animation}
        onTabClick={onTabClick}>
        {children}
      </RcTabs>
    );
  }
}
