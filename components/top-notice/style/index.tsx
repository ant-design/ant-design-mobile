import variables from '../../style/themes/default';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  notice: {
    backgroundColor: variables.notice_bar_fill,
    height: variables.notice_bar_height,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    fontSize: variables.font_size_subhead,
    color: variables.brand_warning,
    marginRight: variables.h_spacing_lg,
  },
  left6: {
    marginLeft: variables.h_spacing_sm,
  },
  left15: {
    marginLeft: variables.h_spacing_lg,
  },
  close: {
    color: variables.brand_warning,
    fontSize: variables.font_size_display_sm,
    marginRight: variables.h_spacing_lg,
    fontWeight: '200',
  },
  link: {
    transform: [{ rotate: '225deg' }],
    color: variables.brand_warning,
    fontSize: variables.font_size_icontext,
    fontWeight: '500',
    marginRight: variables.h_spacing_lg,
  },
});
