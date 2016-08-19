import Tabs from 'rc-tabs';
import * as React from 'react';
const {TabPane} = Tabs;
import Tab from './Tab.web';

const TabBar = React.createClass({
  statics: {
    Item() {
    },
  },
  getDefaultProps() {
    return {
      prefixCls: 'am-tab-bar',
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
    const panels = children.map((c: any) => {
      const cProps = c.props;
      const tab = (<Tab
        prefixCls={`${this.props.prefixCls}-tab`}
        badge={cProps.badge}
        selected={cProps.selected}
        icon={cProps.icon}
        selectedIcon={cProps.icon}
        title={cProps.title}
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
      // TODO support navStyle in rc-tabs
      <Tabs
        tabPosition="bottom"
        prefixCls={this.props.prefixCls}
        activeKey={activeKey}
        onChange={this.onChange}
      >
        {panels}
      </Tabs>
    );
  },
});

export default TabBar;
