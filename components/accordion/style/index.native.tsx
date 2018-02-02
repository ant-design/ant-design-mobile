import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import variables from '../../style/themes/default.native';

export interface AccordionStyle {
  container: ViewStyle;
  header: ViewStyle;
  arrow: ViewStyle;
  headerWrap: ViewStyle;
  headerText: TextStyle;
  content: ViewStyle;
  contentText: TextStyle;
}

// wait for https://github.com/DefinitelyTyped/DefinitelyTyped/pull/18278
// them below any and change to IAccordionStyle
export default StyleSheet.create<any>({
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
    width: 12,
    height: 12,
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
