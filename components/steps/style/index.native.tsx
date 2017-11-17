import variables from '../../style/themes/default.native';
import { ViewStyle, TextStyle } from 'react-native';

const grid = 4;

export interface IStepsStyle {
  head_default_s: ViewStyle;
  head_blue_s: ViewStyle;
  head_gray_s: ViewStyle;
  head_red_s: ViewStyle;
  icon_s: ViewStyle;

  head_default_l: ViewStyle;
  head_blue_l: ViewStyle;
  head_gray_l: ViewStyle;
  head_red_l: ViewStyle;
  tail_default_l: ViewStyle;
  icon_l: ViewStyle;

  tail_default_s: ViewStyle;
  tail_gray: ViewStyle;
  tail_blue: ViewStyle;
  tail_error: ViewStyle;
  tail_last: ViewStyle;
  content_s: ViewStyle;
  content_l: ViewStyle;
  title_s: TextStyle;
  description_s: TextStyle;
  title_l: TextStyle;
  description_l: TextStyle;
}
export default {
  head_default_s: {
    width: 18,
    height: 18,
    backgroundColor: variables.fill_base,
    borderRadius: 18,
    borderWidth: variables.border_width_lg,
    borderColor: variables.brand_primary,
    borderStyle: 'solid',
    overflow: 'hidden',
  },
  head_blue_s: {
    borderColor: variables.brand_primary,
  },
  head_gray_s: {
    borderColor: variables.color_text_placeholder,
  },
  head_red_s: {
    borderColor: variables.brand_error,
  },
  icon_s: {
    width: 14,
    height: 14,
  },

  head_default_l: {
    width: 24,
    height: 24,
    backgroundColor: variables.fill_base,
    borderRadius: 18,
    borderWidth: variables.border_width_lg,
    borderColor: variables.brand_primary,
    borderStyle: 'solid',
    overflow: 'hidden',
  },
  head_blue_l: {
    borderColor: variables.brand_primary,
    backgroundColor: variables.brand_primary,
  },
  head_gray_l: {
    borderColor: variables.color_text_placeholder,
    backgroundColor: variables.color_text_placeholder,
  },
  head_red_l: {
    borderColor: variables.brand_error,
    backgroundColor: variables.brand_error,
  },
  tail_default_l: {
    width: variables.border_width_lg,
    height: 30,
    marginLeft: 11,
  },
  icon_l: {
    width: 20,
    height: 20,
  },
  tail_default_s: {
    width: variables.border_width_lg,
    height: 30,
    marginLeft: 2 * grid,
  },
  tail_default_s_h: {
    height: variables.border_width_lg,
    width: 50,
    marginTop: 2 * grid,
  },
  tail_gray: {
    backgroundColor: variables.color_text_placeholder,
  },
  tail_blue: {
    backgroundColor: variables.brand_primary,
  },
  tail_error: {
    backgroundColor: variables.brand_error,
  },
  tail_last: {
    backgroundColor: 'transparent',
  },
  content_s: {
    paddingLeft: variables.h_spacing_md,
  },
  content_s_h: {
    paddingTop: variables.v_spacing_md,
  },
  content_l: {
    paddingLeft: variables.h_spacing_lg,
  },
  title_s: {
    fontWeight: 'bold',
    fontSize: variables.font_size_caption,
    paddingBottom: variables.v_spacing_md,
    color: variables.color_text_base,
  },
  description_s: {
    fontSize: variables.font_size_caption_sm,
    color: variables.color_text_base,
  },
  title_l: {
    fontWeight: 'bold',
    fontSize: variables.font_size_heading,
    paddingBottom: variables.v_spacing_md,
    color: variables.color_text_base,
  },
  description_l: {
    fontSize: variables.font_size_subhead,
    color: variables.color_text_base,
  },
};
