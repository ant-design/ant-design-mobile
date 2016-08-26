import variables from '../../style/themes/default';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  icon: {
    width: variables.icon_size_sm,
    height: variables.icon_size_sm,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioItemRadio: {
    marginLeft: variables.h_spacing_lg,
    marginRight: variables.h_spacing_md,
  },
  radioItemContent: {
    flex: 1,
    color: variables.color_text_paragraph,
    fontSize: variables.font_size_caption,
    height: variables.v_spacing_xl,
  },
  radioItemContentDisable: {
    color: variables.color_text_disabled,
  },
});
