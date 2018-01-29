import { ViewStyle, TextStyle } from 'react-native';
import variables from '../../style/themes/default.native';

export interface ITextareaItemStyle {
  container: ViewStyle;
  input: TextStyle;
  icon: ViewStyle;
  errorIcon: ViewStyle;
  count: ViewStyle;
}

export default {
  container: {
    borderBottomWidth: variables.border_width_sm,
    borderBottomColor: variables.border_color_base,
  },
  input: {
    paddingHorizontal: variables.h_spacing_md,
    backgroundColor: variables.fill_base,
    fontSize: variables.font_size_heading,
    lineHeight: Math.round(1.3 * variables.font_size_heading),
    textAlignVertical: 'top',
  },
  icon: {
    position: 'absolute',
    top: 8,
    width: variables.icon_size_xs,
    height: variables.icon_size_xs,
  },
  errorIcon: {
    position: 'absolute',
    right: 18,
    top: 12,
  },
  count: {
    position: 'absolute',
    right: variables.h_spacing_md,
    bottom: variables.h_spacing_md,
  },
};
