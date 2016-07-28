import variables from '../../style/variables';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  numberStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  totalStyle: {
    fontSize: variables.font_size_6,
  },
  activeTextStyle: {
    fontSize: variables.font_size_6,
    color: variables.brand_6,
  },
  indicatorStyle: {
    flexDirection: 'row',
  },
  pointStyle: {
    width: 2 * variables.grid,
    height: 2 * variables.grid,
    borderRadius: variables.grid,
    backgroundColor: variables.neutral_6,
  },
  pointActiveStyle: {
    backgroundColor: variables.brand_6,
  },
  spaceLargeStyle: {
    marginRight: 6 * variables.grid,
  },
  spaceSmallStyle: {
    marginRight: variables.grid,
  },
});
