import variables from '../../style/themes/default';

export default {
  ThemesList: {
    underlayColor: variables.fill_tap,
    Header: {
      fontSize: variables.font_size_base,
      color: variables.color_text_caption,
      paddingLeft: variables.h_spacing_lg,
      paddingRight: variables.h_spacing_lg,
      paddingTop: variables.v_spacing_lg,
      paddingBottom: variables.v_spacing_md,
      backgroundColor: variables.fill_body,
    },
    Footer: {
      fontSize: variables.font_size_base,
      color: variables.color_text_caption,
      paddingLeft: variables.h_spacing_lg,
      paddingRight: variables.h_spacing_lg,
      paddingTop: variables.v_spacing_md,
      paddingBottom: variables.v_spacing_md,
      backgroundColor: variables.fill_body,
    },
    Body: {
      backgroundColor: variables.fill_base,
      borderTopWidth: variables.border_width_sm,
      borderTopColor: variables.border_color_base,
    },
    Item: {
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1,
      paddingLeft: variables.h_spacing_lg,
    },
    Line: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      paddingRight: variables.h_spacing_lg,
      paddingTop: 0,
      paddingBottom: 0,
      minHeight: variables.list_item_height,
      borderBottomWidth: variables.border_width_sm,
      borderBottomColor: variables.border_color_base,
    },
    Thumb: {
      width: variables.icon_size_md,
      height: variables.icon_size_md,
      marginRight: variables.h_spacing_lg,
    },
    Content: {
      color: variables.color_text_base,
      fontSize: variables.font_size_heading,
      lineHeight: variables.font_size_heading,
    },
    Extra: {
      color: variables.color_text_caption,
      fontSize: variables.font_size_heading,
    },
    Brief: {
      color: variables.color_text_caption,
      fontSize: variables.font_size_subhead,
    },
    Arrow: {
      width: 8,
      height: 13,
      marginLeft: variables.h_spacing_md,
    },
    ArrowV: {
      width: 13,
      height: 8,
      marginLeft: variables.h_spacing_md,
    },
    Error: {
      Body: {
        borderTopColor: 'red',
      },
      Item: {
        borderBottomColor: 'red',
      },
      Line: {
        borderBottomColor: 'red',
      },
    },
    Last: {
      Item: {
        borderBottomWidth: variables.border_width_sm,
        borderBottomColor: variables.border_color_base,
      },
      Line: {
        borderBottomWidth: 0,
      },
    },
    multipleLine: {
      Line: {
        paddingTop: variables.v_spacing_lg,
        paddingBottom: variables.v_spacing_lg,
      },
      Thumb: {
        width: variables.icon_size_lg,
        height: variables.icon_size_lg,
      },
    },
  },
};
