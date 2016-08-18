import * as React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import TabBarItemProps from './TabBarItemPropTypes';
import Badge from '../badge/';
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
          { badge ? (
              <Badge text={badge}>
                <Image source={selected ? selectedIcon : icon} style={styles.barIcon} />
              </Badge>
            ) : (
              <Image source={selected ? selectedIcon : icon} style={styles.barIcon}  />
            )
          }
          <Text style={[
            styles.barItemTitle,
            {color: selected ? tintColor : unselectedTintColor},
          ]}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
