import variables from '../../style/themes/default';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  icon: {
    width: variables.icon_size_sm,
    height: variables.icon_size_sm,
  },
  touchArea: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  agreeItem: {
    position: 'relative',
    marginLeft: variables.h_spacing_lg,
    paddingLeft: 2 * variables.h_spacing_lg,
  },
  agreeItemCheckbox: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  checkboxItem: {
    paddingLeft: 2 * variables.h_spacing_lg,
  },
  checkboxItemCheckbox: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});
