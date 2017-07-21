import { StyleSheet } from 'react-native';
import variables from '../../style/themes/default';

export default StyleSheet.create<any>({
  text: {
    fontSize: variables.tabs_font_size_heading,
  },
  tab: {
    paddingBottom: 0,
  },
  barTop: {
    height: variables.tabs_height,
    borderTopWidth: 0,
    borderBottomWidth: 1,
  },
  barBottom: {
    height: variables.tabs_height,
    borderTopWidth: 1,
    borderBottomWidth: 0,
  },
  underline: {
    height: 2,
  },
});
