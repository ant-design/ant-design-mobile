import { StyleSheet } from 'react-native';
import variables from '../../style/themes/default.native';

export default {
  container: {
    height: variables.list_item_height + variables.border_width_sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: variables.border_color_base,
    marginLeft: variables.h_spacing_lg,
    paddingRight: variables.h_spacing_lg,
    marginTop: 0,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginRight: variables.h_spacing_sm,
    textAlignVertical: 'center',
    fontSize: variables.font_size_heading,
    color: variables.color_text_base,
  },
  input: {
    flex: 1,
    height: variables.list_item_height,
    backgroundColor: 'transparent',
    fontSize: variables.input_font_size,
    color: variables.color_text_base,
  },
  inputErrorColor: {
    color: '#f50',
  },
  clear: {
    backgroundColor: variables.color_icon_base,
    borderRadius: 15,
    padding: 2,
  },
  extra: {
    marginLeft: variables.h_spacing_sm,
    fontSize: variables.font_size_subhead,
    color: variables.color_text_caption,
  },
  errorIcon: {
    marginLeft: variables.h_spacing_sm,
    width: variables.icon_size_sm,
    height: variables.icon_size_sm,
  },
};
