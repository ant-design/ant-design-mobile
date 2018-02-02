import { TextStyle, ViewStyle } from 'react-native';
import variables from '../../style/themes/default.native';

export interface IActivityIndicatorStyle {
  container: ViewStyle;
  innerContainer: ViewStyle;
  wrapper: ViewStyle;
  tip: TextStyle;
  toast: TextStyle;
  spinner: ViewStyle;
}

export default {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
    zIndex: variables.toast_zindex,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 89,
    height: 89,
    borderRadius: variables.radius_md,
    backgroundColor: variables.toast_fill,
  },
  tip: {
    color: variables.color_text_base,
    fontSize: variables.font_size_base,
    marginLeft: variables.h_spacing_md,
  },
  toast: {
    color: variables.color_text_base_inverse,
    fontSize: variables.font_size_base,
    marginTop: variables.v_spacing_sm,
  },
  spinner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
