import React from 'react';
import {
  DefaultTabBar as RMCDefaultTabBar,
  Tabs as RMCTabs,
} from 'rmc-tabs/lib/index.native';
import TabsProps from './PropsType';
import Styles from './style/index.native';

export default class Tabs extends React.PureComponent<TabsProps, {}> {
  public static DefaultTabBar = RMCDefaultTabBar;

  static defaultProps = {};

  renderTabBar = (props: any) => {
    const { renderTab } = this.props;
    return (
      <RMCDefaultTabBar
        styles={Styles as any}
        {...props}
        renderTab={renderTab}
      />
    );
  }

  render() {
    return (
      <RMCTabs
        styles={Styles as any}
        renderTabBar={this.renderTabBar}
        {...this.props}
      />
    );
  }
}
