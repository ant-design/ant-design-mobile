import { StyleSheet } from 'react-native';
import variables from '../../style/variables';

export default StyleSheet.create({
  segment: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: variables.brand_6,
    borderRadius: variables.radius_1,
  },
  item: {
    flex: 1,
    paddingVertical: 1.5 * variables.grid,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemLeftRadius: {
    borderTopLeftRadius: variables.grid,
    borderBottomLeftRadius: variables.grid,
  },
  itemRightRadius: {
    borderTopRightRadius: variables.grid,
    borderBottomRightRadius: variables.grid,
  },
  itemText: {
    textAlign: 'center',
    fontSize: variables.font_size_2,
  },
});
