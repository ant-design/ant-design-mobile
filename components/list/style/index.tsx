import variables from '../../style/variables';

export default {
  AssetsList: {
    arrowH: 'https://os.alipayobjects.com/rmsportal/eETBcnxVBzqKwru.png',
    // to be updated
    arrowUp: 'https://os.alipayobjects.com/rmsportal/LoENKHGaVaCDCTB.png',
    arrowDown: 'https://os.alipayobjects.com/rmsportal/LoENKHGaVaCDCTB.png'
  },
  ThemesList: {
    underlayColor: '#e5e5e5',
    Header: {
      marginTop: 2 * variables.grid,
      marginLeft: 4 * variables.grid,
      marginRight: 4 * variables.grid,
      marginBottom: 8,
      fontSize: variables.font_size_4,
      lineHeight: 15,
      backgroundColor: '#eaeaea',
      color: variables.neutral_7
    },
    Footer: {
      marginTop: 2 * variables.grid,
      marginLeft: 4 * variables.grid,
      marginRight: 4 * variables.grid,
      marginBottom: 8,
      fontSize: variables.font_size_2,
      lineHeight: 15,
      backgroundColor: '#eaeaea',
      color: variables.neutral_7
    },
    Body: {
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#e5e5e5',
      borderBottomWidth: 1,
      borderBottomColor: '#e5e5e5'
    },
    Item: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      marginLeft: 4 * variables.grid,
      paddingTop: 6,
      paddingBottom: 6,
      paddingRight: 4 * variables.grid,
      height: variables.margin_9,
      borderBottomWidth: 1,
      borderBottomColor: '#e5e5e5'
    },
    Thumb: {
      width: 29,
      height: 29,
      marginRight: 2 * variables.grid
    },
    Content: {
      flex: 1,
      color: variables.neutral_10,
      fontSize: variables.font_size_5,
      height: 24,
      lineHeight: 20
    },
    AffiliatedContent: {
      flex: 1,
      color: variables.neutral_8,
      fontSize: variables.font_size_4,
      height: 24,
      lineHeight: 20
    },
    Detail: {
      flex: 1,
      height: 15,
      lineHeight: 14,
      fontSize: variables.font_size_4,
      color: variables.neutral_7,
      marginTop: variables.margin_1,
    },
    Extra: {
      color: '#999',
      fontSize: 14
    },
    Arrow: {
      width: 13,
      height: 13,
      marginLeft: variables.margin_2
    },
    Error: {
      Body: {
        borderTopColor: 'red',
        borderBottomColor: 'red'
      },
      Item: {
        borderBottomColor: 'red'
      }
    },
    Last: {
      Item: {
        borderBottomWidth: 0
      }
    },
    Line2: {
      Item: {
        height: 65
      },
      Thumb: {
        width: 45,
        height: 45
      }
    }
  }
};
