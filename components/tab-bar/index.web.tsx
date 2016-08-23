import * as React from 'react';
import Tabs from 'rc-tabs';
import Tab from './Tab.web';

const { TabPane } = Tabs;

const TabBar = React.createClass({
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

  render() {
    let activeKey;
    const children = [];
    React.Children.forEach(this.props.children, (c: any) => {
      if (c.props.selected) {
        activeKey = c.key;
      }
      children.push(c);
    });
    const { tintColor, unselectedTintColor, barTintColor } = this.props;
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
          tab={tab}
          key={c.key}
        >
          {cProps.children}
        </TabPane>);
    });
    return (
      <Tabs
        allowScrollBar={false}
        allowInkBar={false}
        tabPosition="bottom"
        prefixCls={this.props.prefixCls}
        activeKey={activeKey}
        onChange={this.onChange}
        styles={{
          bar: { backgroundColor: barTintColor },
        }}
      >
        {panels}
      </Tabs>
    );
  },
});

export default TabBar;
