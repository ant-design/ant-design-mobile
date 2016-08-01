import variables from '../../style/variables';
import { StyleSheet, ViewStyle } from 'react-native';

export const vars = variables;

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
    bottom: 0,
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
  title: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 4 * variables.grid,
    marginBottom: 4 * variables.grid,
  } as ViewStyle,
  titleText: {
    fontWeight: '500',
  } as ViewStyle,
  message: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 4 * variables.grid,
  } as ViewStyle,
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 11 * variables.grid,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: variables.neutral_5,
    backgroundColor: 'white',
  } as ViewStyle,
  destructiveBtn: {
    color: variables.function_error_2,
    fontSize: variables.font_size_6,
  } as ViewStyle,
  cancelBtn: {
    marginTop: 2 * variables.grid,
    position: 'relative',
  } as ViewStyle,
  cancelBtnMask: {
    position: 'absolute',
    top: -2 * variables.grid,
    left: 0,
    right: 0,
    height: 2 * variables.grid,
    backgroundColor: '#F7F7F7',
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: variables.neutral_5,
  } as ViewStyle,
});
