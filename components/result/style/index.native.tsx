import variables from '../../style/themes/default.native';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export interface IResultStyle {
  result: ViewStyle;
  imgWrap: ViewStyle;
  img: ImageStyle;
  title: ViewStyle;
  titleText: TextStyle;
  message: ViewStyle;
  messageText: TextStyle;
  buttonWrap: ViewStyle;
  button: ViewStyle;
}

export default {
  result: {
    alignItems: 'center',
    paddingVertical: variables.v_spacing_xl,
    backgroundColor: variables.fill_base,
    borderBottomColor: variables.border_color_base,
  },
  imgWrap: {
    margin: 0,
  },
  img: {
    width: 60,
    height: 60,
  },
  title: {
    marginTop: variables.v_spacing_lg,
    paddingHorizontal: variables.h_spacing_lg,
  },
  titleText: {
    fontSize: 21,
    color: variables.color_text_base,
  },
  message: {
    marginTop: variables.v_spacing_lg,
    paddingHorizontal: variables.h_spacing_lg,
  },
  messageText: {
    fontSize: variables.font_size_caption,
    color: variables.color_text_caption,
  },
  buttonWrap: {
    flexDirection: 'row',
    marginTop: variables.v_spacing_lg,
    paddingHorizontal: variables.h_spacing_lg,
  },
  button: {
    flex: 1,
  },
};
