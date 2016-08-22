import * as React from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
import RcTabs from 'rc-tabs';

export interface TabsProps {
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: () => void;
  onTabClick?: () => void;
  animation?: boolean;
  className?: string;
  prefixCls?: string;
  tabPosition?: 'top' | 'bottom';
}

export default class Tabs extends React.Component<TabsProps, any> {
  static TabPane = (RcTabs as any).TabPane;
  static defaultProps = {
    prefixCls: 'am-tabs',
    animation: true,
    onChange() {},
    tabPosition: 'top',
    onTabClick() {},
  };

  render() {
    const {className, prefixCls, children, animation, tabPosition} = this.props;
    let cls = classNames({
      [className]: !!className,
      [`${prefixCls}-no-animation`]: animation === false,
    });

    const restProps = assign({}, this.props);
    ['className', 'prefixCls', 'animation', 'tabPosition', 'children'].forEach(prop => {
      if (restProps.hasOwnProperty(prop)) {
        delete restProps[prop];
      }
    });

    const anim = animation ? 'slide-horizontal' : '';
    return (
      <RcTabs
        allowScrollBar={false}
        prefixCls={prefixCls}
        className={cls}
        tabPosition={tabPosition}
        animation={anim}
        {...restProps}
      >
        {children}
      </RcTabs>
    );
  }
}
