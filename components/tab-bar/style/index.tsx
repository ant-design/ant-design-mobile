import { StyleSheet } from 'react-native';
import variables from '../../style/themes/default';

export default StyleSheet.create({
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
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barIcon: {
    width: variables.icon_size_md,
    height: variables.icon_size_md,
  },
  barItemSelected: {
  },
  barItemTitle: {
    fontSize: variables.font_size_icontext,
  },
  contentItem: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentItemSelected: {
    zIndex: 3,
  },
});
