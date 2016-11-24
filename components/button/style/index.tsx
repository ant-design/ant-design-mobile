import variables from '../../style/themes/default';
import { StyleSheet } from 'react-native';

export const highlightStyles = {
  default: {
    backgroundColor: variables.fill_tap,
    borderColor: variables.border_color_base,
  },
  primary: {
    backgroundColor: variables.primary_button_fill_tap,
    borderColor: variables.primary_button_fill,
  },
  ghost: {
    backgroundColor: variables.ghost_button_fill_tap,
    borderColor: variables.ghost_button_color,
  },
  warning: {
    backgroundColor: variables.brand_warning,
    borderColor: variables.brand_warning,
  },
};
export const rawStyles = {
  wrapperStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: variables.radius_md,
    borderWidth: 1,
  },
  large: {
    height: variables.button_height,
    paddingLeft: variables.h_spacing_lg,
    paddingRight: variables.h_spacing_lg,
  },
  small: {
    height: variables.button_height_sm,
    paddingLeft: variables.h_spacing_sm,
    paddingRight: variables.h_spacing_sm,
  },
  default: {
    backgroundColor: variables.fill_base,
    borderColor: variables.border_color_base,
  },
  primary: {
    backgroundColor: variables.primary_button_fill,
    borderColor: variables.primary_button_fill,
  },
  ghost: {
    backgroundColor: 'transparent',
    borderColor: variables.ghost_button_color,
  },
  warning: {
    backgroundColor: variables.fill_base,
    borderColor: variables.brand_warning,
  },
  disabled: {
    backgroundColor: variables.fill_disabled,
    borderColor: variables.fill_disabled,
  },
};

export const highlightTextStyles = {
  default: {
    color: variables.color_text_base,
  },
  primary: {
    color: variables.color_text_base_inverse,
  },
  ghost: {
    color: variables.color_text_base_inverse,
  },
  warning: {
    color: variables.color_text_base_inverse,
  },
};
export const rawTextStyles = {
  large: {
    fontSize: variables.button_font_size,
  },
  small: {
    fontSize: variables.button_font_size_sm,
  },
  default: {
    color: variables.color_text_base,
  },
  primary: {
    color: variables.color_text_base_inverse,
  },
  ghost: {
    color: variables.ghost_button_color,
  },
  warning: {
    color: variables.brand_warning,
  },
  disabled: {
    color: variables.color_text_disabled,
  },
};
export const textStyles = StyleSheet.create(rawTextStyles);

export default StyleSheet.create(rawStyles);
