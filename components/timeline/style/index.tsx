import variables from '../../style/variables';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingBottom: 4 * variables.grid,
  },
  tail: {
    position: 'absolute',
    left: 7,
    top: 0,
    bottom: 0,
    borderLeftWidth: 2,
    borderColor: variables.neutral_4,
    borderStyle: 'solid',
  },
  head: {
    position: 'absolute',
    width: 4 * variables.grid,
    height: 4 * variables.grid,
    backgroundColor: variables.neutral_1,
    borderRadius: 2 * variables.grid,
    borderWidth: 2,
    borderColor: variables.brand_6,
    borderStyle: 'solid',
  },
  head_blue: {
    borderColor: variables.brand_6,
  },
  head_orange: {
    borderColor: variables.orange_6,
  },
  head_green: {
    borderColor: variables.green_6,
  },
  content: {
    top: -1,
    paddingBottom: 2 * variables.grid,
    paddingLeft: 6 * variables.grid,
  },
});
