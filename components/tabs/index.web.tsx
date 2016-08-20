import * as React from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
import RcTabs from 'rc-tabs';

export interface TabsProps {
  type?: 'line' | 'capsule' | 'tabbar';
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: () => void;
  onTabClick?: () => void;
  animation?: string | boolean;
  mode?: 'dark' | 'light';
  className?: string;
  prefixCls?: string;
  tabPosition?: string;
  transitionName?: string;
  tabBarExtraContent?: any;
}

export default class Tabs extends React.Component<TabsProps, any> {
  static TabPane = (RcTabs as any).TabPane;
  static defaultProps = {
    prefixCls: 'am-tabs',
    animation: 'slide-horizontal',
    type: 'line',
    mode: 'light',
    onChange() {
    },
    onTabClick() {
    },
  };

  render() {
    const {className, prefixCls, type, children, animation, tabPosition} = this.props;
    let cls = classNames({
      [className]: !!className,
      [`${prefixCls}-${type}`]: true,
      [`${prefixCls}-no-animation`]: animation === false,
    });

    const restProps = assign({}, this.props);
    ['className', 'prefixCls', 'type', 'animation', 'mode', 'tabPosition', 'children'].forEach(prop => {
      if (restProps.hasOwnProperty(prop)) {
        delete restProps[prop];
      }
    });

    return (
      <RcTabs
        allowScrollBar={false}
        prefixCls={prefixCls}
        className={cls}
        tabPosition={tabPosition}
        animation={animation || ''}
        {...restProps}
      >
        {children}
      </RcTabs>
    );
  }
}
