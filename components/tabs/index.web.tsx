import React from 'react';
import RcTabs, { TabPane } from 'rc-tabs';
import TabsProps from './PropsType';
import SwipeableTabContent from 'rc-tabs/lib/SwipeableTabContent';
import TabContent from 'rc-tabs/lib/TabContent';
import InkTabBar from 'rc-tabs/lib/InkTabBar';

const Tabs = React.createClass<TabsProps, any>({
  statics: {
    TabPane,
  },

  getDefaultProps() {
    return {
      prefixCls: 'am-tabs',
      animated: true,
      swipeable: true,
      onChange() {},
      tabBarPosition: 'top',
      onTabClick() {},
    };
  },

  renderTabBar() {
    const {props} = this;
    return <InkTabBar onTabClick={props.onTabClick} inkBarAnimated={props.animated}/>;
  },

  renderTabContent() {
    const { animated, swipeable } = this.props;
    return swipeable ? (
      <SwipeableTabContent animated={animated} />
    ) : (
      <TabContent animated={animated} />
    );
  },

  render() {
    return (
      <RcTabs
        renderTabBar={this.renderTabBar}
        renderTabContent={this.renderTabContent}
        {...this.props}
      />
    );
  },
});

export default Tabs;
