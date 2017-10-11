import React from 'react';
import { Tabs as RMCTabs, DefaultTabBar as RMCDefaultTabBar, TabBarPropsType } from 'rmc-tabs';
import TabsProps from './PropsType';

export class DefaultTabBar extends RMCDefaultTabBar {
  static defaultProps = {
    ...RMCDefaultTabBar.defaultProps,
    prefixCls: 'am-tabs-default-bar',
  } as TabBarPropsType;
}

export default class Tabs extends React.PureComponent<TabsProps, {}> {

  public static DefaultTabBar = DefaultTabBar;

  static defaultProps = {
    prefixCls: 'am-tabs',
  };

  renderTabBar = (props: any) => {
    const { renderTab } = this.props;
    return <DefaultTabBar  {...props} renderTab={renderTab} />;
  }

  render() {

    return (
      <RMCTabs
        renderTabBar={this.renderTabBar}
        {...this.props}
      />
    );
  }
}
