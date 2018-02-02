import { Platform, TextStyle, ViewStyle } from 'react-native';
import variables from '../../style/themes/default.native';

export interface IBadgeStyle {
  wrap: ViewStyle;
  textCornerWrap: ViewStyle;
  dot: ViewStyle;
  dotSizelarge: ViewStyle;
  textDom: ViewStyle;
  textCorner: ViewStyle;
  textCornerlarge: ViewStyle;
  text: TextStyle;
}

const grid = 4;

export default {
  wrap: {
    flexDirection: 'row',
  },
  textCornerWrap: {
    overflow: 'hidden',
  },
  dot: {
    width: 2 * grid,
    height: 2 * grid,
    borderRadius: grid,
    backgroundColor: variables.brand_important,
    position: 'absolute',
    top: -1 * grid,
    right: -1 * grid,
  },
  dotSizelarge: {
    width: 4 * grid,
    height: 4 * grid,
    borderRadius: 2 * grid,
  },
  textDom: {
    paddingVertical: 0.5 * grid,
    paddingHorizontal: (Platform.OS === 'ios' ? 1.5 : 2) * grid,
    backgroundColor: variables.brand_important,
    borderRadius: 4 * variables.radius_sm,
    borderStyle: 'solid',
    position: 'absolute',
    top: -10,
    right: -15,
  },
  textCorner: {
    width: 18 * grid,
    backgroundColor: variables.brand_important,
    transform: [
      {
        rotate: '45deg',
      },
    ],
    position: 'absolute',
    top: 2 * grid,
  },
  textCornerlarge: {
    width: 26 * grid,
    top: 3 * grid,
  },
  text: {
    color: variables.color_text_base_inverse,
    textAlign: 'center',
  },
};
