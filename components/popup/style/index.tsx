import { StyleSheet, ViewStyle } from 'react-native';
import variables from '../../style/themes/default';

export default StyleSheet.create<any>({
  container: {
    zIndex: variables.popup_zindex,
  },
  wrap: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  } as ViewStyle,
  wrapTop: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  } as ViewStyle,
});
