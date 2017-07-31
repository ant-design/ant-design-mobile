import { ViewStyle } from 'react-native';
import variables from '../../style/themes/default';

export interface IPopupStyle {
  container: ViewStyle;
  wrap: ViewStyle;
  wrapTop: ViewStyle;
}

export default {
  container: {
    zIndex: variables.popup_zindex,
  },
  wrap: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  wrapTop: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
};
