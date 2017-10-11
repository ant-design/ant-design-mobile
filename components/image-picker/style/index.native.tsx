import { ViewStyle, ImageStyle, TextStyle } from 'react-native';
import varibles from '../../style/themes/default.native';

export interface IImagePickerStyle {
  container: ViewStyle;
  size: ViewStyle;
  item: ViewStyle;
  image: ImageStyle;
  closeWrap: ViewStyle;
  closeText: TextStyle;
  plusWrap: ViewStyle;
  plusWrapNormal: ViewStyle;
  plusWrapHighlight: ViewStyle;
  plusText: TextStyle;
}

export default {
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  size: {
    width: 80,
    height: 80,
  },
  item: {
    marginRight: varibles.h_spacing_sm,
    marginBottom: varibles.v_spacing_sm,
    overflow: 'hidden',
  },
  image: {
    overflow: 'hidden',
    borderRadius: varibles.radius_sm,
  },
  closeWrap: {
    width: 16,
    height: 16,
    backgroundColor: '#999',
    borderRadius: 8,
    position: 'absolute',
    top: 4,
    right: 4,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  closeText: {
    color: varibles.color_text_base_inverse,
    backgroundColor: 'transparent',
    fontSize: 20,
    height: 20,
    marginTop: -8,
    fontWeight: '300',
  },
  plusWrap: {
    borderRadius: varibles.radius_sm,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusWrapNormal: {
    backgroundColor: varibles.fill_base,
    borderColor: varibles.border_color_base,
  },
  plusWrapHighlight: {
    backgroundColor: varibles.fill_tap,
    borderColor: varibles.border_color_base,
  },
  plusText: {
    fontSize: 64,
    backgroundColor: 'transparent',
    fontWeight: '100',
    color: varibles.color_text_caption,
  },
};
