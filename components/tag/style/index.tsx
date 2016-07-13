import variables from '../../style/variables';

export default {
  tag: {
    borderRadius: variables.radius_2,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  wrap: {
    overflow: 'hidden',
    borderRadius: variables.radius_2,
  },
  normal: {
    backgroundColor: variables.neutral_1,
    color: variables.neutral_10,
    borderWidth: 1,
    borderColor: variables.neutral_5,
    borderStyle: 'solid',
    borderRadius: variables.radius_2,
  },
  active: {
    backgroundColor: variables.neutral_1,
    color: variables.brand_6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: variables.brand_6,
    borderRadius: variables.radius_2,
  },
  read: {
    backgroundColor: variables.neutral_3,
    color: variables.neutral_10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: variables.neutral_3,
    borderRadius: variables.radius_2,
  },
  disabled: {
    backgroundColor: variables.neutral_2,
    color: variables.neutral_6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: variables.neutral_5,
    borderRadius: variables.radius_2,
  },
  large: {
    paddingVertical: variables.grid,
    paddingHorizontal: 4 * variables.grid,
    fontSize: variables.font_size_2,
    lineHeight: 4 * variables.grid,
  },
  small: {
    paddingVertical: variables.grid,
    paddingHorizontal: 2 * variables.grid,
    fontSize: variables.font_size_1,
    lineHeight: 3 * variables.grid,
  },
  closeWrap: {
    position: 'absolute',
    right: -2.5 * variables.grid,
    top: 2 * variables.grid,
    width: 5 * variables.grid,
    height: 7 * variables.grid,
    backgroundColor: variables.brand_6,
    transform: [{
      rotate: '45deg'
    }],
    overflow: 'hidden'
  },
  close: {
    transform: [{
      rotate: '-45deg'
    }],
    color: 'white',
    marginLeft: -0.5 * variables.grid,
    marginTop: 0.5 * variables.grid,
  },
};
