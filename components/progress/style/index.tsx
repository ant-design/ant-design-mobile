import { StyleSheet } from 'react-native';
import variables from '../../style/themes/default';

export default StyleSheet.create<any>({
  progressOuter: {
    backgroundColor: variables.border_color_base,
    flex: 1,
  },
  progressBar: {
    borderBottomWidth: 4,
    borderStyle: 'solid',
    borderColor: variables.brand_primary,
  },
});
