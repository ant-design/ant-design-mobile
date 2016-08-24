import variables from '../../style/themes/default';
import { StyleSheet, ViewStyle } from 'react-native';

export default StyleSheet.create({
  wrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  } as ViewStyle,
  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: variables.fill_base,
  } as ViewStyle,
  mask: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: variables.fill_mask,
  } as ViewStyle,
});
