import React from 'react';
import { TabBarIOS } from 'react-native';
import { TabBarProps } from './PropsType';
import omit from 'omit.js';

class TabBar extends React.Component<TabBarProps, any> {
  static defaultProps = {
    barTintColor: 'white',
    tintColor: '#108ee9',
    unselectedTintColor: '#888',
  };

  static Item: any;

  render() {
    const { barTintColor, tintColor, unselectedTintColor } = this.props;
    const restProps = omit(this.props, ['barTintColor', 'tintColor', 'unselectedTintColor']);
    return (
      <TabBarIOS
        barTintColor={barTintColor}
        tintColor={tintColor}
        unselectedTintColor={unselectedTintColor}
        {...restProps}
      />
    );
  }
}

TabBar.Item = TabBarIOS.Item;

export default TabBar;
