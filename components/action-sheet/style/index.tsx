import variables from '../../style/variables';
import { StyleSheet } from 'react-native';

export const vars = variables;

export default StyleSheet.create({
  wrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    paddingTop: 5 * variables.grid,
  },
  mask: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(34, 34, 34, 0.6)',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 4 * variables.grid,
    marginBottom: 4 * variables.grid,
  },
  titleText: {
    fontWeight: '500',
  },
  message: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 4 * variables.grid,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 11 * variables.grid,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: variables.neutral_5,
    backgroundColor: 'white',
  },
  destructiveBtn: {
    color: variables.function_error_2,
  },
  cancelBtn: {
    marginTop: 2 * variables.grid,
    position: 'relative',
  },
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
  },
});
