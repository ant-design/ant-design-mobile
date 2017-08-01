import variables from '../../style/themes/default.native';
import { TextStyle, ViewStyle } from 'react-native';

export interface ITagStyle {
  tag: ViewStyle;
  wrap: ViewStyle;
  wrapSmall: ViewStyle;
  text: TextStyle;
  textSmall: TextStyle;
  normalWrap: ViewStyle;
  normalText: TextStyle;
  activeWrap: ViewStyle;
  activeText: TextStyle;
  disabledWrap: ViewStyle;
  disabledText: TextStyle;
  close: ViewStyle;
  closeIOS: ViewStyle;
  closeAndroid: ViewStyle;
  closeText: TextStyle;
  closeTransform: ViewStyle;
}

export default {
  tag: {
    borderRadius: variables.radius_sm,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    overflow: 'visible',
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
  close: {
    position: 'absolute',
    backgroundColor: variables.color_text_placeholder,
  },
  closeIOS: {
    borderRadius: 8,
    width: 16,
    height: 16,
    left: -5,
    top: -4,
    overflow: 'hidden',
  },
  closeAndroid: {
    width: 16,
    height: 32,
    left: -2,
    top: -10,
    transform: [{
      rotate: '45deg',
    }],
  },
  closeText: {
    color: variables.color_text_base_inverse,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 18,
  },
  closeTransform: {
    transform: [{
      rotate: '-45deg',
    }],
  },
};
