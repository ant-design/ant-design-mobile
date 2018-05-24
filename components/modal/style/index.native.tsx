import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import variables from '../../style/themes/default.native';

export interface IModalStyle {
  container: ViewStyle;
  wrap: ViewStyle;
  popupContainer: ViewStyle;
  innerContainer: ViewStyle;
  footer: ViewStyle;
  header: TextStyle;
  body: ViewStyle;
  maskClosable: ViewStyle;
  closeWrap: ViewStyle;
  close: TextStyle;
  buttonGroupH: ViewStyle;
  buttonGroupV: ViewStyle;
  buttonWrapH: ViewStyle;
  buttonWrapV: ViewStyle;
  buttonText: TextStyle;
  operationContainer: ViewStyle;
  operationBody: ViewStyle;
  buttonTextOperation: TextStyle;
}

export default {
  container: {
    zIndex: variables.modal_zindex,
  },
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {},
  popupSlideUp: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  popupSlideDown: {},
  innerContainer: {
    borderRadius: variables.radius_md,
    width: 286,
    paddingTop: variables.v_spacing_xl,
    overflow: 'hidden',
  },
  // fix android borderRadius
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderBottomLeftRadius: variables.radius_md,
    borderBottomRightRadius: variables.radius_md,
  },
  header: {
    fontSize: variables.modal_font_size_heading,
    color: variables.color_text_base,
    textAlign: 'center',
    paddingHorizontal: variables.h_spacing_lg,
  },
  body: {
    paddingTop: 0,
    paddingBottom: variables.v_spacing_lg,
    paddingHorizontal: variables.h_spacing_lg,
  },
  maskClosable: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  closeWrap: {
    position: 'absolute',
    top: 0,
    left: variables.h_spacing_lg,
  },
  close: {
    fontSize: 40,
    fontWeight: '200',
    color: '#bcbcbc',
    lineHeight: 30,
  },
  buttonGroupH: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  buttonGroupV: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  buttonWrapH: {
    height: variables.modal_button_height,
    flexGrow: 1,
    justifyContent: 'center',
    borderColor: variables.border_color_base,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    paddingVertical: 11,
  },
  buttonWrapV: {
    flexGrow: 1,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: variables.border_color_base,
    paddingVertical: 11,
  },
  buttonText: {
    textAlign: 'center',
    color: variables.color_link,
    fontSize: variables.modal_button_font_size,
    backgroundColor: 'transparent',
  },
  operationContainer: {
    paddingTop: 0,
  },
  operationBody: {
    paddingBottom: 0,
    paddingHorizontal: 0,
  },
  buttonTextOperation: {
    color: variables.color_text_base,
    textAlign: 'left',
    paddingHorizontal: 15,
  },
};
