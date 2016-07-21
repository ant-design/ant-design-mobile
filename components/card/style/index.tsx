import variables from '../../style/variables';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: variables.neutral_5,
    borderRadius: variables.radius_1,
    paddingBottom: 2 * variables.grid,
    flexDirection: 'column',
    backgroundColor: variables.neutral_1,
  },
  headerWrap: {
    flexDirection: 'row',
    paddingVertical: 2 * variables.grid,
    paddingRight: 4 * variables.grid,
    marginLeft: 4 * variables.grid,
    borderBottomWidth: 1,
    borderColor: variables.neutral_5,
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    marginRight: 2 * variables.grid,
  },
  headerContent: {
    color: variables.neutral_10,
    fontSize: variables.font_size_5,
    flex: 1,
  },
  headerExtra: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingVertical: 2 * variables.grid,
    minHeight: 12 * variables.grid,
  },
  footerWrap: {
    flexDirection: 'row',
    paddingHorizontal: 4 * variables.grid,
  },
  footerContent: {
    flex: 1,
    fontSize: variables.font_size_2,
    color: variables.neutral_7,
  },
  footerExtra: {
    flex: 1,
    textAlign: 'right',
    fontSize: variables.font_size_2,
    color: variables.neutral_7,
  },
});
