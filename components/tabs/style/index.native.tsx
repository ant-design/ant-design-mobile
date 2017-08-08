import variables from '../../style/themes/default.native';

export default {
  bar: {
    backgroundColor: variables.fill_base,
    shadowRadius: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
  barTop: {
    borderBottomWidth: 1,
    borderBottomColor: variables.border_color_base,
  },
  barBottom: {
    borderTopWidth: 1,
    borderTopColor: variables.border_color_base,
  },
  tab: {
    height: variables.tabs_height,
    padding: 0,
  },
  tabText: {
    fontSize: variables.tabs_font_size_heading,
  },
  inactiveTabText: {
    color: variables.color_text_base,
  },
  activeTabText: {
    color: variables.tabs_color,
  },
  underline: {
    height: 2,
    backgroundColor: variables.tabs_color,
  },
};
