import variables from '../../style/themes/default';

export default {
  input: {
    paddingHorizontal: variables.h_spacing_md,
    backgroundColor: variables.fill_base,
    fontSize: variables.font_size_heading,
    lineHeight: 1.3 * variables.font_size_heading,
  },
  icon: {
    position: 'absolute',
    top: 8,
    width: variables.icon_size_xs,
    height: variables.icon_size_xs,
  },
  errorIcon: {
    position: 'absolute',
    right: 18,
    top: 12,
  },
  count: {
    position: 'absolute',
    right: variables.h_spacing_md,
    bottom: variables.h_spacing_md,
  },
};
