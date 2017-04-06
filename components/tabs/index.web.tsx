import React from 'react';
import RcTabs, { TabPane } from 'rc-tabs';
import TabsProps from './PropsType';
import SwipeableTabContent from 'rc-tabs/lib/SwipeableTabContent';
import TabContent from 'rc-tabs/lib/TabContent';
import InkTabBar from 'rc-tabs/lib/InkTabBar';
import SwipeableInkTabBar from 'rc-tabs/lib/SwipeableInkTabBar';

export default class Tabs extends React.Component<TabsProps, any> {
  static TabPane = TabPane;

  static defaultProps = {
      prefixCls: 'am-tabs',
      animated: true,
      swipeable: true,
      tabBarPosition: 'top',
      hammerOptions: {},
      tabBarhammerOptions: {},
      pageSize: 5,
      speed: 8,
      onChange() {},
      onTabClick() {},
  };

  renderTabBar = () => {
    const { children, animated, speed, pageSize, tabBarhammerOptions, onTabClick } = this.props;
    if (children.length > pageSize) {
      return (
        <SwipeableInkTabBar
          onTabClick={onTabClick}
          speed={speed}
          pageSize={pageSize}
          hammerOptions={tabBarhammerOptions}
        />
      );
    }
    return <InkTabBar inkBarAnimated={animated} />;
  }

  renderTabContent = () => {
    const { animated, swipeable, hammerOptions } = this.props;
    return swipeable ? (
      <SwipeableTabContent animated={animated} hammerOptions={hammerOptions} />
    ) : (
      <TabContent animated={animated} />
    );
  }

  render() {
    return (
      <RcTabs
        renderTabBar={this.renderTabBar}
        renderTabContent={this.renderTabContent}
        {...this.props}
      />
    );
  }
}
