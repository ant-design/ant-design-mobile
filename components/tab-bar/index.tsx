import React from 'react';
import Tabs from '../tabs';
import Tab from './Tab';
import getDataAttr from '../_util/getDataAttr';
import { TabBarProps, TabBarItemProps } from './PropsType';

export class Item extends React.Component<TabBarItemProps, any> {
  static defaultProps = {
    prefixCls: 'am-tab-bar-item',
  } as TabBarItemProps;

  render() {
    const { prefixCls, style } = this.props;

    return <div className={prefixCls} style={style}>
      {this.props.children}
    </div>;
  }
}

class AntTabBar extends React.Component<TabBarProps, any> {
  static defaultProps = {
    prefixCls: 'am-tab-bar',
    barTintColor: 'white',
    tintColor: '#108ee9',
    hidden: false,
    unselectedTintColor: '#888',
    placeholder: '正在加载',
    animated: false,
    swipeable: false,
  } as TabBarProps;

  public static Item = Item;

  getTabs = () => {
    return React.Children.map(this.props.children, (c: any) => {
      return {
        ...c.props as TabBarItemProps,
      };
    });
  }

  renderTabBar = () => {
    const { barTintColor, prefixCls, tintColor, unselectedTintColor } = this.props;
    const tabsData = this.getTabs();

    const content = tabsData.map((cProps, index) => {
      return <Tab
        key={index}
        prefixCls={`${this.props.prefixCls}-tab`}
        badge={cProps.badge}
        dot={cProps.dot}
        selected={cProps.selected}
        icon={cProps.icon}
        selectedIcon={cProps.selectedIcon}
        title={cProps.title}
        tintColor={tintColor}
        unselectedTintColor={unselectedTintColor}
        dataAttrs={getDataAttr(cProps)}
        onClick={() => cProps.onPress && cProps.onPress()}
      />;
    });
    return <div className={`${prefixCls}-bar`} style={{ backgroundColor: barTintColor }}>
      {content}
    </div>;
  }

  render() {
    const { prefixCls, children, hidden, animated, swipeable } = this.props;
    const tabs = this.getTabs();
    let activeIndex = 0;
    tabs.forEach((tab, index) => {
      if (tab.selected) {
        activeIndex = index;
      }
    });

    return (
      <div className={prefixCls}>
        <Tabs
          tabs={tabs}
          renderTabBar={hidden ? false : this.renderTabBar}
          tabBarPosition="bottom"
          page={activeIndex < 0 ? undefined : activeIndex}
          animated={animated}
          swipeable={swipeable}
        >
          {children}
        </Tabs>
      </div>
    );
  }
}

export default AntTabBar;
