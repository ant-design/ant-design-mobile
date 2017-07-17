import variables from '../../style/themes/default';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export interface TAccordionStyle {
  container: ViewStyle;
  header: ViewStyle;
  arrow: ViewStyle;
  headerWrap: ViewStyle;
  headerText: TextStyle;
  content: ViewStyle;
  contentText: TextStyle;
}

export default StyleSheet.create<TAccordionStyle>({
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: variables.border_color_base,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: variables.h_spacing_lg,
    paddingRight: 2 * variables.h_spacing_lg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: variables.border_color_base,
  },
  arrow: {
    width: 15,
    height: 15,
  },
  headerWrap: {
    flex: 1,
    height: variables.list_item_height,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    color: variables.color_text_base,
    fontSize: variables.font_size_heading,
  },
  content: {
    paddingVertical: variables.v_spacing_md,
    paddingHorizontal: variables.h_spacing_md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: variables.border_color_base,
  },
  contentText: {
    fontSize: variables.font_size_subhead,
    color: variables.color_text_paragraph,
  },
});
