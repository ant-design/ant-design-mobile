import variables from '../../style/variables';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  warp_row: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    paddingBottom: 4 * variables.grid,
  },
  tail: {
    position: 'absolute',
    left: 15,
    top: 0,
    bottom: 0,
    borderLeftWidth: 2,
    borderColor: variables.neutral_4,
    borderStyle: 'solid',
  },
  tail_current: {
    borderColor: variables.brand_6,
  },
  head_default: {
    position: 'absolute',
    width: 8 * variables.grid,
    height: 8 * variables.grid,
    backgroundColor: variables.neutral_1,
    borderRadius: 4 * variables.grid,
    borderWidth: 2,
    borderColor: variables.brand_6,
    borderStyle: 'solid',
    paddingTop: 2 * variables.grid,
    paddingLeft: 2 * variables.grid,
    paddingRight: 2 * variables.grid,
  },
  head_small: {
    position: 'absolute',
    width: 6 * variables.grid,
    height: 6 * variables.grid,
    backgroundColor: variables.neutral_1,
    borderRadius: 3 * variables.grid,
    borderWidth: 2,
    borderColor: variables.brand_6,
    borderStyle: 'solid',
    top: 2 * variables.grid,
    paddingTop: variables.grid,
    paddingLeft: variables.grid,
    paddingRight: variables.grid,
  },
  head_pointer: {
    position: 'absolute',
    width: 2 * variables.grid,
    height: 2 * variables.grid,
    backgroundColor: variables.neutral_6,
    borderRadius: 1 * variables.grid,
    top: 4 * variables.grid,
    paddingTop: variables.grid,
    paddingLeft: variables.grid,
    paddingRight: variables.grid,
  },
  head_current: {
    backgroundColor: variables.brand_6,
    paddingTop: variables.grid,
  },
  head_wait: {
    borderColor: variables.neutral_6,
    paddingTop: variables.grid,
  },
  content: {
    top: -1,
    paddingBottom: 4 * variables.grid,
    paddingLeft: 12 * variables.grid,
  },
  dotText_default: {
    fontSize: variables.font_size_5,
  },
  dotText_small: {
    fontSize: variables.font_size_2,
    left: 1,
    top: -1,
  },
  dotText_pointer: {
    fontSize: variables.font_size_2,
    left: 1,
    top: -1,
  },
  text_current: {
    color: variables.neutral_1,
  },
  text_wait: {
    color: variables.neutral_6,
  },
  title: {
    fontWeight: variables.font_weight_2,
    fontSize: variables.font_size_4,
    paddingTop: 2 * variables.grid,
    paddingBottom: 3 * variables.grid,
    color: variables.neutral_7,
  },
  color_current: {
    color: variables.neutral_8,
  },
  description: {
    fontSize: variables.font_size_2,
    color: variables.neutral_7,
  },
  item: {
    width: 16 * variables.grid,
  },
  horizon_title: {
    fontWeight: variables.font_weight_2,
    fontSize: variables.font_size_4,
    position: 'absolute',
    top: 10 * variables.grid,
    left: -2 * variables.grid,
    color: variables.neutral_7,
    textAlign: 'center',
  },
  horizon_tail_default: {
    marginTop: 4 * variables.grid,
    marginLeft: 8 * variables.grid,
    borderBottomWidth: 2,
    borderColor: variables.neutral_4,
    borderStyle: 'solid',
  },
  horizon_tail_small: {
    marginTop: 5 * variables.grid,
    marginLeft: 6 * variables.grid,
    borderBottomWidth: 2,
    borderColor: variables.neutral_4,
    borderStyle: 'solid',
  },
  horizon_tail_pointer: {
    marginTop: 5 * variables.grid,
    marginLeft: 2 * variables.grid,
    borderBottomWidth: 1,
    borderColor: variables.neutral_4,
    borderStyle: 'solid',
  },
});
