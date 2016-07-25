import variables from '../../style/variables';

export default {
  container: {
    height: 11 * variables.grid + 1,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    marginLeft: 4 * variables.grid,
    paddingRight: 4 * variables.grid,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginRight: 4 * variables.grid,
    textAlignVertical: 'center',
    fontSize: variables.font_size_5,
    color: variables.neutral_10,
  },
  input: {
    flex: 1,
    height: 11 * variables.grid,
    backgroundColor: variables.neutral_1,
    fontSize: variables.font_size_5,

  },
  clearIcon: {
    width: 16,
    height: 16,
    marginLeft: variables.grid,
  },
  extra: {
    marginLeft: variables.grid,
    fontSize: variables.font_size_4,
  },
  errorIcon: {
    marginLeft: variables.grid,
    width: 16,
    height: 16,
  },
};
