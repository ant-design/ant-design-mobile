import variables from '../../style/themes/default';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  grayBorderBox: {
    borderColor: variables.border_color_base,
  },
  icon: {
    width: variables.icon_size_md,
    height: variables.icon_size_md,
  },
  text: {
    fontSize: variables.font_size_caption_sm,
    color: variables.color_text_base,
    marginTop: variables.v_spacing_md,
  },
});
