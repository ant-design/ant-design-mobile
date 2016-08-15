import { StyleSheet } from 'react-native';
import variables from '../../style/variables';

export default StyleSheet.create({
  tabbar: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabs: {
    height: 48,
    borderTopWidth: 1,
    borderColor: '#d9d9d9',
    borderStyle: 'solid',
    flexDirection: 'row',
  },
  barItem: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barIcon: {
    width: 7 * variables.grid,
    height: 7 * variables.grid,
  },
  barItemSelected: {
  },
  barItemTitle: {
    fontSize: variables.font_size_1,
  },
  contentItem: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentItemSelected: {
    zIndex: 3,
  },
});
