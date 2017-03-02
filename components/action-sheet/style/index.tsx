import variables from '../../style/themes/default';
import { StyleSheet, ViewStyle } from 'react-native';

export const vars = variables;

export default StyleSheet.create({
  container: {
    zIndex: vars.modal_zindex,
  },
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
  title: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: variables.h_spacing_lg,
    marginBottom: variables.h_spacing_lg,
  } as ViewStyle,
  titleText: {
    fontWeight: '500',
  } as ViewStyle,
  message: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: variables.h_spacing_lg,
  } as ViewStyle,
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: variables.option_height,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: variables.border_color_base,
    backgroundColor: 'white',
  } as ViewStyle,
  cancelBtn: {
    marginTop: variables.v_spacing_md,
    position: 'relative',
  } as ViewStyle,
  cancelBtnMask: {
    position: 'absolute',
    top: -variables.v_spacing_md,
    left: 0,
    right: 0,
    height: variables.v_spacing_md,
    backgroundColor: '#F7F7F7',
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: variables.border_color_base,
  } as ViewStyle,
  destructiveBtn: {
    color: variables.brand_error,
    fontSize: variables.font_size_heading,
  } as ViewStyle,
});
