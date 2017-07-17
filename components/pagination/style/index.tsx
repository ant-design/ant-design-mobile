import variables from '../../style/themes/default';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export interface IPaginationStyle {
  container: ViewStyle;
  numberStyle: ViewStyle;
  totalStyle: TextStyle;
  activeTextStyle: TextStyle;
  indicatorStyle: ViewStyle;
  pointStyle: ViewStyle;
  pointActiveStyle: ViewStyle;
  spaceStyle: ViewStyle;
}

export default StyleSheet.create<IPaginationStyle>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  totalStyle: {
    fontSize: variables.font_size_display_sm,
    color: variables.color_text_base,
  },
  activeTextStyle: {
    fontSize: variables.font_size_display_sm,
    color: variables.color_link,
  },
  indicatorStyle: {
    flexDirection: 'row',
  },
  pointStyle: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: variables.input_color_icon,
  },
  pointActiveStyle: {
    backgroundColor: '#888',
  },
  spaceStyle: {
    marginHorizontal: variables.h_spacing_sm / 2,
    marginVertical: variables.v_spacing_sm / 2,
  },
});
