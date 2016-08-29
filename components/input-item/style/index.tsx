import variables from '../../style/themes/default';

export default {
  container: {
    height: variables.list_item_height + variables.border_width_sm,
    borderBottomWidth: variables.border_width_sm,
    borderBottomColor: variables.border_color_base,
    marginLeft: variables.h_spacing_lg,
    paddingRight: variables.h_spacing_lg,
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
    backgroundColor: variables.fill_base,
    fontSize: variables.font_size_heading,
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
