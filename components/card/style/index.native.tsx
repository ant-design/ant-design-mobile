import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import variables from '../../style/themes/default.native';

export interface ICardStyle {
  card: ViewStyle;
  full: ViewStyle;
  headerWrap: ViewStyle;
  headerTitle: ViewStyle;
  headerImage: ImageStyle;
  headerContent: TextStyle;
  headerExtra: TextStyle;
  body: ViewStyle;
  footerWrap: ViewStyle;
  footerContent: TextStyle;
  footerExtra: TextStyle;
}

export default {
  card: {
    borderWidth: variables.border_width_md,
    borderColor: variables.border_color_base,
    borderRadius: variables.radius_md,
    paddingBottom: variables.v_spacing_sm,
    flexDirection: 'column',
    backgroundColor: variables.fill_base,
  },
  full: {
    borderRadius: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  headerWrap: {
    flexDirection: 'row',
    paddingVertical: variables.v_spacing_sm,
    paddingRight: variables.h_spacing_lg,
    marginLeft: variables.h_spacing_lg,
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
    flexGrow: 1,
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
};
