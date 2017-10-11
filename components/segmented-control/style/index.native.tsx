import { ViewStyle, TextStyle, StyleSheet } from 'react-native';
import variables from '../../style/themes/default.native';

export interface ISegmentControlStyle {
  segment: ViewStyle;
  item: ViewStyle;
  itemLeftRadius: ViewStyle;
  itemRightRadius: ViewStyle;
  itemText: TextStyle;
}
export default {
  segment: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: variables.brand_primary,
    borderRadius: variables.radius_md,
  },
  item: {
    flex: 1,
    paddingVertical: variables.h_spacing_sm,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemLeftRadius: {
    borderTopLeftRadius: variables.radius_md,
    borderBottomLeftRadius: variables.radius_md,
  },
  itemRightRadius: {
    borderTopRightRadius: variables.radius_md,
    borderBottomRightRadius: variables.radius_md,
  },
  itemText: {
    textAlign: 'center',
    fontSize: variables.font_size_caption_sm,
  },
};
