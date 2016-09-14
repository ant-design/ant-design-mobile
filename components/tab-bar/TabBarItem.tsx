import * as React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import TabBarItemProps from './TabBarItemPropTypes';
import styles from './style';

export default class TabBarItem extends React.Component<TabBarItemProps, any> {
  static defaultProps = {
    onPress() {},
  };
  render() {
    const {
      title, selected, tintColor, unselectedTintColor, icon, selectedIcon,
      onPress, badge,
    } = this.props;
    const itemSelectedStyle = selected ? styles.barItemSelected : null;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.barItem, itemSelectedStyle]}>
          <View>
            <Image source={selected ? selectedIcon : icon} style={styles.barIcon} />
            { badge && <View style={[styles.badge]}>
              <Text style={[styles.badgeText]}>{badge}</Text>
            </View> }
          </View>
          <Text style={[
            styles.barItemTitle,
            {color: selected ? tintColor : unselectedTintColor},
          ]}>{title}</Text>
          </View>
      </TouchableWithoutFeedback>
    );
  }
}
