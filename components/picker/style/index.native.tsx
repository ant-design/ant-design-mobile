import { TextStyle, ViewStyle } from 'react-native';

export interface IPickerStyle {
  modal: ViewStyle;
  header: ViewStyle;
  headerItem: ViewStyle;
  actionText: TextStyle;
  title: TextStyle;
}

export default {
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  header: {
    flexGrow: 1,
    height: 44,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
  },
  headerItem: {
    height: 44,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    color: '#0ae',
    fontSize: 18,
    textAlign: 'center',
  },
  okText: {},
  dismissText: {},
  title: {
    color: '#666',
    fontSize: 18,
    textAlign: 'center',
  },
};
