import variables from '../../style/themes/default';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    borderWidth: variables.border_width_md,
    borderColor: variables.border_color_base,
    borderRadius: variables.radius_md,
    paddingBottom: variables.h_spacing_md,
    flexDirection: 'column',
    backgroundColor: variables.fill_base,
  },
  headerWrap: {
    flexDirection: 'row',
    paddingVertical: variables.v_spacing_md,
    paddingRight: variables.h_spacing_lg,
    marginLeft: variables.h_spacing_lg,
    // borderBottomWidth: variables.border_width_md,
    // borderColor: variables.neutral_5,
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    marginRight: variables.h_spacing_sm,
  },
  headerContent: {
    color: variables.color_text_base,
    fontSize: variables.font_size_heading,
    flex: 1,
  },
  headerExtra: {
    flex: 1,
    fontSize: variables.font_size_heading,
    color: variables.color_text_caption,
    textAlign: 'right',
  },
  body: {
    flex: 1,
    paddingVertical: variables.v_spacing_md,
    minHeight: 48,
    borderTopWidth: variables.border_width_md,
    borderColor: variables.border_color_base,
  },
  footerWrap: {
    flexDirection: 'row',
    paddingHorizontal: variables.h_spacing_lg,
  },
  footerContent: {
    flex: 1,
    fontSize: variables.font_size_base,
    color: variables.color_text_caption,
  },
  footerExtra: {
    textAlign: 'right',
    fontSize: variables.font_size_base,
    color: variables.color_text_caption,
  },
});
