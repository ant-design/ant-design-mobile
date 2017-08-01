import { ViewStyle, TextStyle } from 'react-native';
import variables from '../../style/themes/default.native';

export interface ITabBarStyle {
  tabbar: ViewStyle;
  content: ViewStyle;
  tabs: ViewStyle;
  barItem: ViewStyle;
  barIcon: ViewStyle;
  barItemSelected: ViewStyle;
  barItemTitle: TextStyle;
  contentItem: ViewStyle;
  contentItemSelected: ViewStyle;
  badge: ViewStyle;
  badgeText: TextStyle;
}

export default {
  tabbar: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabs: {
    height: variables.tab_bar_height,
    borderTopWidth: variables.border_width_md,
    borderColor: variables.border_color_base,
    borderStyle: 'solid',
    flexDirection: 'row',
  },
  barItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barIcon: {
    width: 28,
    height: 28,
    marginTop: 2,
  },
  barItemSelected: {
  },
  barItemTitle: {
    fontSize: variables.font_size_icontext,
    marginTop: 2,
  },
  contentItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    height: 0,
  },
  contentItemSelected: {
    height: null,
  },
  badge: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: variables.brand_important,
    position: 'absolute',
    top: 0,
    left: 20,
    paddingHorizontal: variables.h_spacing_sm,
  },
  badgeText: {
    textAlign: 'center',
    color: 'white',
  },
};
