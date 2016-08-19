import variables from '../../style/themes/default';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variables.fill_overlay_inverse,
  },
  innerContainer: {
    borderRadius: variables.radius_md,
    width: 286,
    paddingTop: variables.v_spacing_xl,
  },
  header: {
    fontSize: variables.font_size_heading,
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
    color: variables.color_text_tap,
  },
});
