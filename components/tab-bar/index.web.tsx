import * as React from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import Tab from './Tab.web';
import TabContent from 'rc-tabs/lib/TabContent';
import TabBar from 'rc-tabs/lib/TabBar';

const AntTabBar = React.createClass({
  statics: {
    Item() {
    },
  },
  getDefaultProps() {
    return {
      prefixCls: 'am-tab-bar',
      barTintColor: 'white',
      tintColor: '#108ee9',
      unselectedTintColor: '#888',
    };
  },

  onChange(key) {
    React.Children.forEach(this.props.children, (c: any) => {
      if (c.key === key && c.props.onPress) {
        c.props.onPress();
      }
    });
  },

  renderTabBar() {
    const {props} = this;
    return <TabBar onTabClick={props.onTabClick} style={{ backgroundColor: props.barTintColor }}/>;
  },

  renderTabContent() {
    return <TabContent animated={false} />;
  },

  render() {
    let activeKey;
    const children = [];
    React.Children.forEach(this.props.children, (c: any) => {
      if (c.props.selected) {
        activeKey = c.key;
      }
      children.push(c);
    });
    const {tintColor, unselectedTintColor} = this.props;
    const panels = children.map((c: any) => {
      const cProps = c.props;
      const tab = (<Tab
        prefixCls={`${this.props.prefixCls}-tab`}
        badge={cProps.badge}
        selected={cProps.selected}
        icon={cProps.icon}
        selectedIcon={cProps.selectedIcon}
        title={cProps.title}
        tintColor={tintColor}
        unselectedTintColor={unselectedTintColor}
      />);
      return (
        <TabPane
          placeholder="正在加载"
          tab={tab}
          key={c.key}
        >
          {cProps.children}
        </TabPane>);
    });
    return (
      <Tabs
        renderTabBar={this.renderTabBar}
        renderTabContent={this.renderTabContent}
        tabBarPosition="bottom"
        prefixCls={this.props.prefixCls}
        activeKey={activeKey}
        onChange={this.onChange}
      >
        {panels}
      </Tabs>
    );
  },
});

export default AntTabBar;
