import colorPalette from '../../style/color-palette';
import variables from '../../style/variables';

export default {
  notice: {
    backgroundColor: variables.function_warning_1,
    height: 9 * variables.grid,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    flex: 1,
    fontSize: variables.font_size_2,
    color: colorPalette.red_6,
    marginRight: 3 * variables.grid,
  },
  left8: {
    marginLeft: 2 * variables.grid,
  },
  left12: {
    marginLeft: 3 * variables.grid,
  },
  close: {
    color: colorPalette.red_6,
    fontSize: variables.font_size_6,
    marginRight: 2 * variables.grid,
    fontWeight: '200',
  },
  link: {
    transform: [{ rotate: '225deg' }],
    color: colorPalette.red_6,
    fontSize: variables.font_size_1,
    fontWeight: '500',
    marginRight: 3 * variables.grid,
  }
};
