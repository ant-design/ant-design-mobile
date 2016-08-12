import * as React from 'react';
import { TabBarIOS } from 'react-native';

class TabBar extends React.Component<any, any> {
  static defaultProps = {
    // barTintColor: '',
    // tintColor: '',
  };

  static Item: any;

  render() {
    return (
      <TabBarIOS {...this.props} />
    );
  }
}

TabBar.Item = TabBarIOS.Item;

export default TabBar;
