import React from 'react';
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
  /*web only*/
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
  };

  public static Item = Item;

  getTabs = () => {
    return React.Children.map(this.props.children, (c: any) => {
      return {
        ...(c.props as TabBarItemProps),
      };
    });
  }

  renderTabBar = () => {
    const {
      barTintColor,
      prefixCls,
      tintColor,
      unselectedTintColor,
      hidden,
    } = this.props;
    const tabsData = this.getTabs();

    const content = tabsData.map((cProps, index) => {
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
    });
    let cls = `${prefixCls}-bar`;
    if (hidden) {
      cls += ` ${prefixCls}-bar-hidden`;
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
    } = this.props;
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
          renderTabBar={this.renderTabBar}
          tabBarPosition="bottom"
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
