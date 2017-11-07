import { StyleSheet } from 'react-native';
import variables from '../../style/themes/default.native';

export default {
  underlayColor: {
    backgroundColor: variables.fill_tap,
  },
  Header: {
    fontSize: variables.font_size_base,
    color: variables.color_text_caption,
    paddingHorizontal: variables.h_spacing_lg,
    paddingTop: variables.v_spacing_lg,
    paddingBottom: variables.v_spacing_md,
    backgroundColor: variables.fill_body,
  },
  Footer: {
    fontSize: variables.font_size_base,
    color: variables.color_text_caption,
    paddingHorizontal: variables.h_spacing_lg,
    paddingVertical: variables.v_spacing_md,
    backgroundColor: variables.fill_body,
  },
  Body: {
    backgroundColor: variables.fill_base,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: variables.border_color_base,
  },
  BodyBottomLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: variables.fill_base,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: variables.border_color_base,
  },
  Item: {
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: variables.h_spacing_lg,
    backgroundColor: variables.fill_base,
  },
  Line: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: variables.h_spacing_lg,
    paddingVertical: variables.v_spacing_sm,
    minHeight: variables.list_item_height,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: variables.border_color_base,
  },
  Thumb: {
    width: variables.icon_size_md,
    height: variables.icon_size_md,
    marginRight: variables.h_spacing_lg,
  },
  Content: {
    color: variables.color_text_base,
    fontSize: variables.font_size_heading,
    textAlignVertical: 'center',
  },
  Extra: {
    color: variables.color_text_caption,
    fontSize: variables.font_size_heading,
    textAlign: 'right',
    textAlignVertical: 'center',
  },
  Brief: {
    minHeight: variables.font_size_icontext,
  },
  BriefText: {
    color: variables.color_text_caption,
    fontSize: variables.font_size_subhead,
    paddingTop: variables.v_spacing_xs,
    textAlignVertical: 'center',
  },
  Arrow: {
    width: 8,
    height: 13,
    marginLeft: variables.h_spacing_md,
    marginTop: variables.v_spacing_xs,
  },
  ArrowV: {
    width: 13,
    height: 8,
    marginLeft: variables.h_spacing_md,
  },
  multipleLine: {
    paddingVertical: variables.v_spacing_sm,
  },
  multipleThumb: {
    width: variables.icon_size_lg,
    height: variables.icon_size_lg,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
};
