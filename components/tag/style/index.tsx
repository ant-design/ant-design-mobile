import variables from '../../style/variables';

export default {
  tag: {
    borderRadius: variables.radius_2,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  wrap: {
    overflow: 'hidden',
    borderRadius: variables.radius_2,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  normalWrap: {
    backgroundColor: variables.neutral_1,
    borderColor: variables.neutral_5,
  },
  normalText: {
    color: variables.neutral_10,
  },
  activeWrap: {
    backgroundColor: variables.neutral_1,
    borderColor: variables.brand_6,
  },
  activeText: {
    color: variables.brand_6,
  },
  readWrap: {
    backgroundColor: variables.neutral_3,
    borderColor: variables.neutral_3,
  },
  readText: {
    color: variables.neutral_10,
  },
  disabledWrap: {
    backgroundColor: variables.neutral_2,
    borderColor: variables.neutral_5,
  },
  disabledText: {
    color: variables.neutral_6,
  },
  largeWrap: {
    paddingVertical: variables.grid,
    paddingHorizontal: 4 * variables.grid,
  },
  largeText: {
    fontSize: variables.font_size_2,
    textAlign: 'center',
  },
  smallWrap: {
    paddingVertical: variables.grid,
    paddingHorizontal: 2 * variables.grid,
  },
  smallText: {
    fontSize: variables.font_size_1,
    textAlign: 'center',
  },
  closeWrap: {
    position: 'absolute',
    right: 0,
    top: -1.5 * variables.grid,
    width: 2 * variables.grid,
    height: 7 * variables.grid,
    backgroundColor: variables.brand_6,
    transform: [{
      rotate: '45deg'
    }],
    overflow: 'hidden',
  },
  closeDom: {
    backgroundColor: 'transparent', 
    position: 'absolute', 
    right: 0, bottom: 0, 
    height: 16, 
    width: 16,
  },
  closeX: {
    transform: [{
      rotate: '-45deg'
    }],
    color: 'white',
    marginLeft: 0,
    marginTop: 1.8 * variables.grid,
  },
  fixAndroid: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 2.5 * variables.grid,
    height: 2.5 * variables.grid,
    borderBottomRightRadius: variables.radius_2,
    borderTopLeftRadius: variables.radius_2,
    backgroundColor: variables.brand_6,
  }
};
