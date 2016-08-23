import variables from '../../style/themes/default';
import { StyleSheet } from 'react-native';

const grid = 4;
export default StyleSheet.create({
  warp_row: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    paddingBottom: 4 * grid,
  },
  tail: {
    position: 'absolute',
    left: 15,
    top: 0,
    bottom: 0,
    borderLeftWidth: 2,
    borderColor: variables.fill_tap,
    borderStyle: 'solid',
  },
  tail_current: {
    borderColor: variables.brand_primary,
  },
  head_default: {
    position: 'absolute',
    width: 8 * grid,
    height: 8 * grid,
    backgroundColor: variables.fill_base,
    borderRadius: 4 * grid,
    borderWidth: 2,
    borderColor: variables.brand_primary,
    borderStyle: 'solid',
    paddingTop: 2 * grid,
    paddingLeft: 2 * grid,
    paddingRight: 2 * grid,
  },
  head_small: {
    position: 'absolute',
    width: 6 * grid,
    height: 6 * grid,
    backgroundColor: variables.fill_base,
    borderRadius: 3 * grid,
    borderWidth: 2,
    borderColor: variables.brand_primary,
    borderStyle: 'solid',
    top: 2 * grid,
    paddingTop: grid,
    paddingLeft: grid,
    paddingRight: grid,
  },
  head_pointer: {
    position: 'absolute',
    width: 2 * grid,
    height: 2 * grid,
    backgroundColor: variables.fill_tap,
    borderRadius: 1 * grid,
    top: 4 * grid,
    paddingTop: grid,
    paddingLeft: grid,
    paddingRight: grid,
  },
  head_current: {
    backgroundColor: variables.brand_primary,
    paddingTop: grid,
  },
  head_wait: {
    borderColor: variables.fill_tap,
    paddingTop: grid,
  },
  content: {
    top: -1,
    paddingBottom: 4 * grid,
    paddingLeft: 12 * grid,
  },
  dotText_default: {
    fontSize: variables.link_button_font_size,
  },
  dotText_small: {
    fontSize: variables.font_size_caption_sm,
    left: 1,
    top: -1,
  },
  dotText_pointer: {
    fontSize: variables.font_size_caption_sm,
    left: 1,
    top: -1,
  },
  text_current: {
    color: variables.fill_base,
  },
  text_wait: {
    color: variables.fill_tap,
  },
  title: {
    fontWeight: 'bold',
    fontSize: variables.font_size_subhead,
    paddingTop: 2 * grid,
    paddingBottom: 3 * grid,
    color: variables.color_text_base,
  },
  color_current: {
    color: variables.color_text_base,
  },
  description: {
    fontSize: variables.font_size_caption_sm,
    color: variables.color_text_base,
  },
  item: {
    width: 16 * grid,
  },
  horizon_title: {
    fontWeight: 'bold',
    fontSize: variables.font_size_subhead,
    position: 'absolute',
    top: 10 * grid,
    left: -2 * grid,
    color: variables.color_text_base,
    textAlign: 'center',
  },
  horizon_tail_default: {
    marginTop: 4 * grid,
    marginLeft: 8 * grid,
    borderBottomWidth: 2,
    borderColor: variables.fill_tap,
    borderStyle: 'solid',
  },
  horizon_tail_small: {
    marginTop: 5 * grid,
    marginLeft: 6 * grid,
    borderBottomWidth: 2,
    borderColor: variables.fill_tap,
    borderStyle: 'solid',
  },
  horizon_tail_pointer: {
    marginTop: 5 * grid,
    marginLeft: 2 * grid,
    borderBottomWidth: 1,
    borderColor: variables.fill_tap,
    borderStyle: 'solid',
  },
});
