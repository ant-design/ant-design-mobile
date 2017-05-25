import variables from '../../style/themes/default';
import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 64 : 54,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: variables.toast_zindex,
  },
  innerContainer: {
    backgroundColor: 'transparent',
  },
  innerWrap: {
    alignItems: 'center',
    backgroundColor: variables.toast_fill,
    minWidth: 100,
  },
  iconToast: {
    borderRadius: variables.radius_lg,
    padding: variables.v_spacing_lg,
  },
  textToast: {
    borderRadius: variables.radius_sm,
    paddingVertical: variables.v_spacing_md,
    paddingHorizontal: variables.v_spacing_lg,
  },
  content: {
    color: variables.color_text_base_inverse,
    fontSize: variables.font_size_subhead,
  },
  image: {
    width: variables.icon_size_lg,
    height: variables.icon_size_lg,
    marginBottom: variables.v_spacing_xs,
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: variables.v_spacing_md,
  },
});
