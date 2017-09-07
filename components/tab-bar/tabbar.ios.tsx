import React from 'react';
import { TabBarIOS } from 'react-native';
import { TabBarProps } from './PropsType';

class TabBar extends React.Component<TabBarProps, any> {
  static defaultProps = {
    barTintColor: 'white',
    tintColor: '#108ee9',
    unselectedTintColor: '#888',
  };

  static Item: any;

  render() {
    const { barTintColor, tintColor, unselectedTintColor, ...restProps } = this.props;

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
