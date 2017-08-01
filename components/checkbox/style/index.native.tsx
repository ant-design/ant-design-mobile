import { ViewStyle } from 'react-native';
import variables from '../../style/themes/default.native';

export interface ICheckboxStyle {
  wrapper: ViewStyle;
  icon: ViewStyle;
  iconRight: ViewStyle;
  agreeItem: ViewStyle;
  agreeItemCheckbox: ViewStyle;
  checkboxItemCheckbox: ViewStyle;
}

export default {
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: variables.icon_size_sm,
    height: variables.icon_size_sm,
  },
  iconRight: {
    marginLeft: variables.h_spacing_md,
  },
  agreeItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeItemCheckbox: {
    marginLeft: variables.h_spacing_lg,
    marginRight: variables.h_spacing_md,
  },
  checkboxItemCheckbox: {
    marginRight: variables.h_spacing_md,
    alignSelf: 'center',
  },
};
