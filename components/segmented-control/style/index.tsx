import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import variables from '../../style/themes/default';

export interface ISegmentControlStyle {
  segment: ViewStyle;
  item: ViewStyle;
  itemLeftRadius: ViewStyle;
  itemRightRadius: ViewStyle;
  itemText: TextStyle;
}
export default StyleSheet.create<any>({
  segment: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: variables.brand_primary,
    borderRadius: variables.radius_md,
  },
  item: {
    flex: 1,
    paddingVertical: variables.h_spacing_sm,
    borderLeftWidth: 1,
    borderRightWidth: 1,
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
});
