import varibles from '../../style/variables';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  size: {
    width: 19 * varibles.grid,
    height: 19 * varibles.grid,
  },
  item: {
    marginRight: 2 * varibles.grid,
    marginBottom: 2 * varibles.grid,
    overflow: 'hidden',
  },
  image: {
    overflow: 'hidden',
    borderRadius: varibles.radius_1,
  },
  closeWrap: {
    width: 4 * varibles.grid,
    height: 4 * varibles.grid,
    backgroundColor: varibles.neutral_7,
    borderRadius: 2 * varibles.grid,
    position: 'absolute',
    top: varibles.grid,
    right: varibles.grid,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  closeText: {
    color: varibles.neutral_1,
    backgroundColor: 'transparent',
    fontSize: 5 * varibles.grid,
    height: 5 * varibles.grid,
    marginTop: -2 * varibles.grid,
    fontWeight: '300',
  },
  plusWrap: {
    borderRadius: varibles.radius_1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  plusWrapNormal: {
    backgroundColor: varibles.neutral_1,
    borderColor: varibles.neutral_5,
  },
  plusWrapHighlight: {
    backgroundColor: varibles.neutral_3,
    borderColor: varibles.neutral_6,
  },
  plusText: {
    fontSize: 64,
    backgroundColor: 'transparent',
    fontWeight: '100',
  },
  plusNormal: {
    color: varibles.neutral_5,
  },
  plusTextHilight: {
    color: varibles.neutral_6,
  },
});
