import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'relative',
  },
  slide: {
    backgroundColor: 'transparent',
  },
  scrollview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  paginationX: {
    flex: 1,
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  paginationY: {
    flex: 1,
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    transform: [{
      rotate: '90deg',
    }],
  },
});
