import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

export interface TabBarItemProps {
  badge?: string | number;
  onPress?: () => void;
  selected?: boolean;
  icon?: any;
  selectedIcon?: any;
  style?: any;
  children: any;
  title: string;
  tintColor?: string;
  unselectedTintColor?: string;
  /*react-native android only*/
  iconStyle?: any;
  /*react-native ios only*/
  systemIcon?: any;
  renderAsOriginal?: boolean;
  /* react-native only */
  styles?: any;
  /*web only*/
  rootPrefixCls?: string;
  className?: string;
}

export default class TabBarItem extends React.Component<TabBarItemProps, any> {
  static defaultProps = {
    onPress() {},
  };
  render() {
    const {
      title, selected, tintColor, unselectedTintColor, icon, selectedIcon,
      onPress, badge, styles, iconStyle,
    } = this.props;
    const itemSelectedStyle = selected ? styles.barItemSelected : null;
    const badgeDom = badge ? (
      <View style={[styles.badge]}>
        <Text style={[styles.badgeText]}>{badge}</Text>
      </View>
    ) : null;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.barItem, itemSelectedStyle]}>
          <View>
            <Image source={selected ? selectedIcon : icon} style={[styles.barIcon, iconStyle]} />
            {badgeDom}
          </View>
          <Text style={[ styles.barItemTitle, { color: selected ? tintColor : unselectedTintColor } ]}>
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
