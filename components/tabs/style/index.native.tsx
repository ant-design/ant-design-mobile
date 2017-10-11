import variables from '../../style/themes/default.native';
import * as RN from 'react-native';

export default {
  Tabs: {
    container: {
      flex: 1,
    } as RN.ViewStyle,
    topTabBarSplitLine: {
      borderBottomColor: variables.border_color_base,
      borderBottomWidth: 1,
    } as RN.ViewStyle,
    bottomTabBarSplitLine: {
      borderTopColor: variables.border_color_base,
      borderTopWidth: 1,
    } as RN.ViewStyle,
  },
  TabBar: {
    container: {
    },
    tabs: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: variables.fill_base,
      justifyContent: 'space-around',
      shadowRadius: 0,
      shadowOpacity: 0,
      elevation: 0,
    } as RN.ViewStyle,
    tab: {
      height: variables.tabs_height,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      flexDirection: 'row',
    } as RN.ViewStyle,
    underline: {
      height: 2,
      backgroundColor: variables.tabs_color,
    } as RN.ViewStyle,
    textStyle: {
      fontSize: 15,
    } as RN.ViewStyle,
    activeTextColor: variables.tabs_color,
    inactiveTextColor: variables.color_text_base,
  },
};
