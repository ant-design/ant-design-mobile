import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
  },
  headerItem: {
    flex: 1,
  },
  actionText: {
    color: '#0ae',
    fontSize: 18,
    textAlign: 'center',
  },
  title: {
    color: '#666',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
