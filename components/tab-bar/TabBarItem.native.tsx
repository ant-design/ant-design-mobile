import React from 'react';
import {
  Image,
  ImageRequireSource,
  ImageStyle,
  ImageURISource,
  StyleProp,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export interface TabBarItemProps {
  badge?: string | number;
  onPress?: () => void;
  selected?: boolean;
  icon?: ImageURISource | ImageURISource[] | ImageRequireSource;
  selectedIcon?: ImageURISource | ImageURISource[] | ImageRequireSource;
  title: string;
  tintColor?: string;
  unselectedTintColor?: string;
  /*react-native android only*/
  iconStyle?: StyleProp<ImageStyle>;
  renderAsOriginal?: boolean;
  /* react-native only */
  styles?: any;
}

export default class TabBarItem extends React.Component<TabBarItemProps, any> {
  static defaultProps = {
    onPress() {},
  };
  render() {
    const {
      title,
      selected,
      tintColor,
      unselectedTintColor,
      icon,
      selectedIcon,
      onPress,
      badge,
      styles,
      iconStyle,
    } = this.props;
    const itemSelectedStyle = selected ? styles.barItemSelected : null;
    const badgeDom = badge ? (
      <View style={[styles.badge]}>
        <Text style={[styles.badgeText]}>{badge}</Text>
      </View>
    ) : null;
    // icon
    const source =
      selected && selectedIcon !== undefined
        ? selectedIcon
        : icon !== undefined ? icon : null;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.barItem, itemSelectedStyle]}>
          <View>
            {source === null ? null : (
            // tslint:disable-next-line:jsx-no-multiline-js
              <Image source={source} style={[styles.barIcon, iconStyle]} />
            )}
            {badgeDom}
          </View>
          <Text
            // tslint:disable-next-line:jsx-no-multiline-js
            style={[
              styles.barItemTitle,
              { color: selected ? tintColor : unselectedTintColor },
            ]}
          >
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
