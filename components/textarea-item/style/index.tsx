import variables from '../../style/variables';

export default {
  input: {
    paddingHorizontal: 2 * variables.grid,
    backgroundColor: variables.neutral_1,
    fontSize: variables.font_size_6,
  }
  icon: {
    position: 'absolute',
    top: 2 * variables.grid,
    width: 18,
    height: 18, 
  }
  errorIcon: {
    position: 'absolute',
    right: 2 * variables.grid,
    top: 2 * variables.grid,
  }
  count: {
    position: 'absolute',
    right: 2 * variables.grid,
    bottom: 2 * variables.grid,
  }
};
