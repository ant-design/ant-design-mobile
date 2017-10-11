import React from 'react';
import { Tabs as RMCTabs, DefaultTabBar as RMCDefaultTabBar } from 'rmc-tabs/lib/index.native';
import Styles from './style/index.native';
import TabsProps from './PropsType';

export default class Tabs extends React.PureComponent<TabsProps, {}> {
  public static DefaultTabBar = RMCDefaultTabBar;

  static defaultProps = {
  };

  renderTabBar = (props: any) => {
    const { renderTab } = this.props;
    return <RMCDefaultTabBar styles={Styles as any} {...props} renderTab={renderTab} />;
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
