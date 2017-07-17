import variables from '../../style/themes/default';
import { StyleSheet, ViewStyle } from 'react-native';

export interface ICheckboxStyle {
  wrapper: ViewStyle;
  icon: ViewStyle;
  iconRight: ViewStyle;
  agreeItem: ViewStyle;
  agreeItemCheckbox: ViewStyle;
  checkboxItemCheckbox: ViewStyle;
}
export default StyleSheet.create<ICheckboxStyle>({
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
});
