import * as React from 'react';
import { TabBarIOS } from 'react-native';
import TabBarProps from './TabBarPropTypes';

class TabBar extends React.Component<TabBarProps, any> {
  static defaultProps = {
    barTintColor: 'white',
    tintColor: '#108ee9',
    unselectedTintColor: '#888',
  };

  static Item: any;

  render() {
    const { barTintColor, tintColor, unselectedTintColor } = this.props;
    const resetProps = Object.assign({}, this.props);
    ['barTintColor', 'tintColor', 'unselectedTintColor'].forEach(item => {
      delete resetProps[item];
    });
    return (
      <TabBarIOS
        barTintColor={barTintColor}
        tintColor={tintColor}
        unselectedTintColor={unselectedTintColor}
        {...resetProps}
      />
    );
  }
}

TabBar.Item = TabBarIOS.Item;

export default TabBar;
