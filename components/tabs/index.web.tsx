import React from 'react';
import RcTabs, { TabPane } from 'rc-tabs';
import className from 'classnames';
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

  getInitialState() {
    const { activeKey, defaultActiveKey, children } = this.props;
    const activeTabKey = activeKey || defaultActiveKey || children[0].props.key;
    const activeTabIndex = children.findIndex(tabPane => tabPane.key === activeTabKey);
    return {
      // 超过5个的情况下，保证初始时 activeTab 显示在屏幕中间，便于向两侧翻页
      viewportStartTabIndex: children.length > 5 && activeTabIndex >= 3 ? activeTabIndex - 2 : 0,
    };
  },

  renderTabBar() {
    const {props} = this;
    return <InkTabBar onTabClick={this.handleTabClick} inkBarAnimated={props.animated}/>;
  },

  renderTabContent() {
    const { animated, swipeable } = this.props;
    return swipeable ? (
      <SwipeableTabContent animated={animated} />
    ) : (
      <TabContent animated={animated} />
    );
  },

  getChildren() {
    const { children } = this.props;
    const { viewportStartTabIndex } = this.state;
    return children.slice(viewportStartTabIndex, viewportStartTabIndex + 5);
  },

  handleTabClick(key) {
    this.setState({
      viewportStartTabIndex: this.getStartTabIndex(key),
    });
    this.props.onTabClick(key);
  },

  getStartTabIndex(activeTabKey) {
    const { children } = this.props;
    const { viewportStartTabIndex } = this.state;
    const activeTabIndex = children.findIndex(tabPane => tabPane.key === activeTabKey);
    // 只有一页，则起始tabIndex为0，永远不需要变
    if (children.length < 5) {
      return 0;
    }
    // 滚到了可视区最左侧且还可以向左翻页
    if (activeTabIndex === viewportStartTabIndex && viewportStartTabIndex > 0) {
      return viewportStartTabIndex - 1;
    }
    // 滚到了可视区最右侧且还可以向右翻页
    if (activeTabIndex === viewportStartTabIndex + 4 && viewportStartTabIndex + 4 < children.length - 1) {
      return viewportStartTabIndex + 1;
    }
    // 未到两侧，不翻页
    return viewportStartTabIndex;
  },

  getClassName() {
    const { viewportStartTabIndex } = this.state;
    const totalTabsCount = this.props.children.length;
    const cls = className({
      [`${this.props.prefixCls}-leftpage`]: totalTabsCount > 5 && viewportStartTabIndex > 0,
      [`${this.props.prefixCls}-rightpage`]: totalTabsCount > 5 && viewportStartTabIndex + 4 < totalTabsCount - 1,
    });
    return cls;
  },

  render() {
    const newProps = {
      ...this.props,
      children: this.getChildren(),
      className: this.getClassName(),
    };
    return (
      <RcTabs
        renderTabBar={this.renderTabBar}
        renderTabContent={this.renderTabContent}
        {...newProps}
      />
    );
  },
});

export default Tabs;
