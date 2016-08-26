import variables from '../../style/themes/default';
import { StyleSheet, ViewStyle } from 'react-native';

export default StyleSheet.create({
  input: {
    borderRadius: variables.radius_md,
    backgroundColor: '#fff',
    borderColor: variables.border_color_base,
    borderWidth: variables.border_width_sm,
    alignSelf: 'stretch',
    height: variables.search_bar_input_height,
    lineHeight: variables.search_bar_input_height,
    color: variables.color_text_base,
    fontSize: variables.font_size_base,
    paddingLeft: variables.h_spacing_lg + variables.icon_size_xxs + variables.h_spacing_sm,
    paddingRight: variables.h_spacing_lg + variables.icon_size_xxs + variables.h_spacing_sm,
    flex: 1,
  } as ViewStyle,
  wrapper: {
    backgroundColor: '#ddd',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: variables.h_spacing_md,
    paddingRight: variables.h_spacing_md,
    flexDirection: 'row',
  } as ViewStyle,
  cancelTextContainer: {
    height: variables.search_bar_input_height,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  cancelText: {
    fontSize: variables.link_button_font_size,
    color: variables.color_link,
    paddingLeft: variables.h_spacing_lg,
  } as ViewStyle,
  search: {
    tintColor: variables.input_color_icon,
    position: 'absolute',
    left: variables.h_spacing_md + 8,
    top: (variables.search_bar_input_height - variables.icon_size_xxs) / 2 + 8,
    width: variables.icon_size_xxs,
    height: variables.icon_size_xxs,
  } as ViewStyle,
});
