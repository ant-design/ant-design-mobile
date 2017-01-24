import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
    zIndex: 99,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 89,
    height: 89,
    borderRadius: 6,
    backgroundColor: 'rgba(58, 58, 58, 0.9)',
  },
  tip: {
    color: '#999',
    fontSize: 14,
    marginLeft: 8,
  },
  toast: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
  spinner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
