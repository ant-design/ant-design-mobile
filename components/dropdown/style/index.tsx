import variables from '../../style/variables';
import { StyleSheet, ViewStyle } from 'react-native';

export default StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  } as ViewStyle,
  content: {
    backgroundColor: 'white',
    paddingTop: 5 * variables.grid,
  } as ViewStyle,
  mask: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(34, 34, 34, 0.6)',
  } as ViewStyle,
});
