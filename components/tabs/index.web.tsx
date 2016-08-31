import * as React from 'react';
import RcTabs, { TabPane } from 'rc-tabs';
import TabsProps from './TabsProps';
import SwipeableTabContent from 'rc-tabs/lib/SwipeableTabContent';
import InkTabBar from 'rc-tabs/lib/InkTabBar';

const Tabs = React.createClass<TabsProps, any>({
  statics: {
    TabPane,
  },

  getDefaultProps() {
    return {
      prefixCls: 'am-tabs',
      animated: true,
      onChange() {
      },
      tabBarPosition: 'top',
      onTabClick() {
      },
    };
  },

  renderTabBar() {
    const {props} = this;
    return <InkTabBar onTabClick={props.onTabClick} inkBarAnimated={props.animated}/>;
  },

  renderTabContent() {
    return <SwipeableTabContent animated={this.props.animated}/>;
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
