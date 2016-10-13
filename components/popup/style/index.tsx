import { StyleSheet, ViewStyle } from 'react-native';

export default StyleSheet.create({
  wrap: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  } as ViewStyle,
  wrapTop: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  } as ViewStyle,
});
