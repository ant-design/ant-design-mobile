const variables = require('../../style/variables').default;

export default {
  Card: {
    borderWidth: 1,
    borderColor: variables.neutral_5,
    borderRadius: variables.radius_1,
    paddingBottom: 2*variables.grid,
    flexDirection: 'column',
    backgroundColor: variables.neutral_1,
  },
  Header: {
    header : {
      flexDirection: 'row',
      paddingVertical: 2 * variables.grid,
      paddingRight: 4 * variables.grid,
      marginLeft: 4 * variables.grid,
      borderBottomWidth: 1,
      borderColor: variables.neutral_5,
      alignItems: 'center'
    },
    title: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      marginRight: 2 * variables.grid,
    },
    content: {
      color: variables.neutral_10,
      fontSize: variables.font_size_5,
      flex: 1,
    },
    extra: {
      flex: 1,
    }
  },
  Body: {
    paddingVertical: 2 * variables.grid,
    // fontSize: variables.font_size_5,
    flex: 1,
    // minHeight: 12 * variables.grid,
  },
  Footer: {
    footer: {
      flexDirection: 'row',
      paddingHorizontal: 4 * variables.grid,
    },
    content: {
      flex: 1,
      fontSize: variables.font_size_2,
      color: variables.neutral_7,
    },
    extra: {
      flex: 1,
      textAlign: 'right',
      fontSize: variables.font_size_2,
      color: variables.neutral_7,
    }
  }
};
