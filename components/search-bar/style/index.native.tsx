import variables from '../../style/themes/default.native';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export interface ISearchBarStyle {
  input: TextStyle;
  inputWrapper: ViewStyle;
  wrapper: ViewStyle;
  cancelTextContainer: ViewStyle;
  cancelText: TextStyle;
  search: ImageStyle;
}

export default {
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    borderRadius: variables.radius_md,
    backgroundColor: '#fff',
    borderColor: variables.border_color_base,
    borderWidth: variables.border_width_sm,
    height: variables.search_bar_input_height,
    color: variables.color_text_base,
    fontSize: variables.font_size_base,
    paddingLeft: variables.h_spacing_lg + variables.icon_size_xxs + variables.h_spacing_sm,
    paddingRight: variables.h_spacing_lg + variables.icon_size_xxs + variables.h_spacing_sm,
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
  },
  wrapper: {
    backgroundColor: variables.search_bar_fill,
    height: variables.search_bar_height,
    paddingLeft: variables.h_spacing_md,
    paddingRight: variables.h_spacing_md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelTextContainer: {
    height: variables.search_bar_input_height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    fontSize: variables.link_button_font_size,
    color: variables.color_link,
    paddingLeft: variables.h_spacing_lg,
  },
  search: {
    tintColor: variables.input_color_icon,
    position: 'absolute',
    left: variables.h_spacing_md + 8,
    top: (variables.search_bar_height - variables.icon_size_xxs) / 2,
    width: variables.icon_size_xxs,
    height: variables.icon_size_xxs,
  },
};
