import variables from '../../style/variables';

export default {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(34, 34, 34, 0.6)',
  },
  innerContainer: {
    borderRadius: variables.radius_1,
    width: 286,
    padding: 6 * variables.grid,
  },
  title: {
    fontSize: variables.font_size_6,
    color: variables.neutral_10,
    textAlign: 'center',
  },
  maskClosable: {
    position: 'absolute', 
    top: 0, 
    bottom:0, 
    left: 0, 
    right: 0, 
    backgroundColor: 'transparent',
  },
  closeWrap: {
    position: 'absolute',
    top: 0,
    right: 4 * variables.grid,
  },
  close: {
    fontSize: 40,
    fontWeight: '300',
    color: variables.neutral_7,
  },
};
