import variables from '../../style/themes/default';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  actions: {
    flexDirection: 'column',
  },
  buttonWrap: {
    borderTopWidth: 1,
    borderTopColor: variables.border_color_base,
    borderStyle: 'solid',
    paddingVertical: 12,
  },
  button: {
    textAlign: 'center',
    color: variables.color_link,
    fontSize: variables.link_button_font_size,
  },
});
