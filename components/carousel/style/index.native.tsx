import variables from '../../style/themes/default.native';

export default {
  pagination: {
    position: 'absolute',
    alignItems: 'center',
  },
  paginationX: {
    bottom: 10,
    left: 0,
    right: 0,
  },
  paginationY: {
    right: 10,
    top: 0,
    bottom: 0,
  },
  pointStyle: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: variables.color_icon_base,
  },
  pointActiveStyle: {
    backgroundColor: '#888',
  },
  spaceStyle: {
    marginHorizontal: variables.h_spacing_sm / 2,
    marginVertical: variables.v_spacing_sm / 2,
  },
};
