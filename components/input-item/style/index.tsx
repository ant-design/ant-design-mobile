import variables from '../../style/variables';

export default {
  container: {
    position: 'relative',
    height: 11 * variables.grid + 1,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    marginLeft: 4 * variables.grid
  },
  text: {
    position: 'absolute',
    top: 2.5 * variables.grid,
    left: 0,
    height: 6 * variables.grid,
    lineHeight: 6 * variables.grid,
    textAlignVertical: 'center',
    fontSize: variables.font_size_6,
    color: variables.neutral_10,
  },
  input: {
    position: 'absolute',
    top: 2.5 * variables.grid,
    left: 14 * variables.grid,
    right: 0,
    height: 6 * variables.grid,
    lineHeight: 6 * variables.grid,
    backgroundColor: variables.neutral_1,
    fontSize: variables.font_size_6,
  },
  clearIcon: {
    position: 'absolute',
    top: 3.5 * variables.grid,
    right: 2 * variables.grid,
    width: 16,
    height: 16,
  },
  errorIcon: {
    position: 'absolute',
    top: 3.5 * variables.grid,
    right: 2 * variables.grid,
    width: 16,
    height: 16,
  },
};
