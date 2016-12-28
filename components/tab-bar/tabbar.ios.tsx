import React from 'react';
import { TabBarIOS } from 'react-native';
import assign from 'object-assign';
import TabBarProps from './PropsType';

class TabBar extends React.Component<TabBarProps, any> {
  static defaultProps = {
    barTintColor: 'white',
    tintColor: '#108ee9',
    unselectedTintColor: '#888',
  };

  static Item: any;

  render() {
    const { barTintColor, tintColor, unselectedTintColor } = this.props;
    const resetProps = assign({}, this.props);
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
