import variables from '../../style/variables';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrap: {
    flexDirection: 'row',
  },
  textCornerWrap: {
    overflow: 'hidden',
  },
  dot: {
    width: 2 * variables.grid,
    height: 2 * variables.grid,
    borderRadius: variables.radius_1,
    backgroundColor: '#f55404',
    position: 'absolute',
    top: -1 * variables.grid,
    right: -1 * variables.grid,
  },
  dotSizelarge: {
    width: 4 * variables.grid,
    height: 4 * variables.grid,
    borderRadius: 2 * variables.radius_1,
  },
  textDom: {
    paddingVertical: 0.5 * variables.grid,
    paddingHorizontal: 2 * variables.grid,
    backgroundColor: '#f55404',
    borderRadius: 2 * variables.radius_2,
    borderStyle: 'solid',
    position: 'absolute',
    top: -10,
    right: -15,
  },
  textCorner: {
    width: 18 * variables.grid,
    backgroundColor: '#f55404',
    transform: [{
      rotate: '45deg',
    }],
    position: 'absolute',
    top: 2 * variables.grid,
  },
  textCornerlarge: {
    width: 26 * variables.grid,
    top: 3 * variables.grid,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});
