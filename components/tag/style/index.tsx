import variables from '../../style/themes/default';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tag: {
    borderRadius: variables.radius_sm,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  wrap: {
    overflow: 'hidden',
    borderRadius: variables.radius_sm,
    borderWidth: variables.border_width_sm,
    borderStyle: 'solid',
    paddingVertical: variables.v_spacing_sm,
    paddingHorizontal: variables.h_spacing_lg,
  },
  wrapSmall: {
    paddingVertical: 1.5,
    paddingHorizontal: variables.h_spacing_sm,
  },
  text: {
    fontSize: variables.button_font_size_sm,
    textAlign: 'center',
  },
  textSmall: {
    fontSize: variables.font_size_icontext,
  },
  normalWrap: {
    backgroundColor: variables.fill_base,
    borderColor: variables.border_color_base,
  },
  normalText: {
    color: variables.color_text_caption,
  },
  activeWrap: {
    backgroundColor: variables.fill_base,
    borderColor: variables.brand_primary,
  },
  activeText: {
    color: variables.color_link,
  },
  disabledWrap: {
    backgroundColor: variables.fill_disabled,
    borderWidth: 0,
  },
  disabledText: {
    color: variables.color_text_disabled,
  },
});
