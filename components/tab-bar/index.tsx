import * as React from 'react';
import getDataAttr from '../_util/getDataAttr';
import Tabs from '../tabs';
import { TabBarItemProps, TabBarProps } from './PropsType';
import Tab from './Tab';

export class Item extends React.Component<TabBarItemProps, any> {
  static defaultProps: TabBarItemProps = {
    prefixCls: 'am-tab-bar-item',
    title: '',
  };

  render() {
    const { prefixCls, style } = this.props;

    return (
      <div className={prefixCls} style={style}>
        {this.props.children}
      </div>
    );
  }
}
export interface AntTabbarProps extends TabBarProps {
  prefixCls?: string;
  className?: string;
  hidden?: boolean;
  placeholder?: React.ReactNode;
  noRenderContent?: boolean;
  prerenderingSiblingsNumber?: number;
}
class AntTabBar extends React.Component<AntTabbarProps, any> {
  static defaultProps: AntTabbarProps = {
    prefixCls: 'am-tab-bar',
    barTintColor: 'white',
    tintColor: '#108ee9',
    hidden: false,
    unselectedTintColor: '#888',
    placeholder: '正在加载',
    animated: false,
    swipeable: false,
    prerenderingSiblingsNumber: 1,
    tabBarPosition: 'bottom',
  };

  public static Item = Item;

  getTabs = () => {
    const tabs = [] as TabBarItemProps[];
    React.Children.forEach(this.props.children, (c: any) => {
      if (c) {
        tabs.push({
          ...(c.props as TabBarItemProps),
        });
      }
    });
    return tabs;
  }

  renderTabBar = () => {
    const {
      barTintColor,
      prefixCls,
      tintColor,
      unselectedTintColor,
      hidden,
      tabBarPosition,
    } = this.props;
    const tabsData = this.getTabs();

    const content = Array.isArray(tabsData) ? tabsData.map((cProps, index) => {
      return (
        <Tab
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
        />
      );
    }) : null;
    let cls = `${prefixCls}-bar`;
    if (hidden) {
      cls += ` ${prefixCls}-bar-hidden-${tabBarPosition}`;
    }

    return (
      <div className={cls} style={{ backgroundColor: barTintColor }}>
        {content}
      </div>
    );
  }

  render() {
    const {
      prefixCls,
      children,
      animated,
      swipeable,
      noRenderContent,
      prerenderingSiblingsNumber,
      tabBarPosition,
    } = this.props;
    const tabs = this.getTabs();
    let activeIndex = 0;
    if (Array.isArray(tabs)) {
      tabs.forEach((tab, index) => {
        if (tab.selected) {
          activeIndex = index;
        }
      });
    }

    return (
      <div className={prefixCls}>
        <Tabs
          tabs={tabs}
          renderTabBar={this.renderTabBar}
          tabBarPosition={tabBarPosition}
          page={activeIndex < 0 ? undefined : activeIndex}
          animated={animated}
          swipeable={swipeable}
          noRenderContent={noRenderContent}
          prerenderingSiblingsNumber={prerenderingSiblingsNumber}
        >
          {children}
        </Tabs>
      </div>
    );
  }
}

export default AntTabBar;
