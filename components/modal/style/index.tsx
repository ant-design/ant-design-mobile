import variables from '../../style/themes/default';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    borderRadius: variables.radius_md,
    width: 286,
    paddingTop: variables.v_spacing_xl,
    overflow: 'hidden',
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
    color: '#bcbcbc',
  },
  buttnGroupH: {
    flexDirection: 'row',
    borderTopWidth: variables.border_width_sm,
    borderColor: variables.border_color_base,
  },
  buttnGroupV: {
    flexDirection: 'column',

  },
  buttnWrapH: {
    flex: 1,
    borderColor: variables.border_color_base,
    borderRightWidth: variables.border_width_sm,
    paddingVertical: 11,
  },
  buttnWrapV: {
    flex: 1,
    borderTopWidth: variables.border_width_sm,
    borderColor: variables.border_color_base,
    paddingVertical: 11,
  },
  buttonText: {
    textAlign: 'center',
    color: variables.color_link,
    fontSize: variables.link_button_font_size,
  },
});
