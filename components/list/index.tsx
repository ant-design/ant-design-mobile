// List
import React from 'react';
import { View, Text } from 'react-native';
import Item from './ListItem';
import { ListProps } from './ListPropTypes';
import theme from './style/index';
const THEMES = theme.ThemesList;

export default class List extends React.Component<ListProps, any> {
  static Item = Item;

  render() {
    let { children, style, renderHeader, renderFooter } = this.props;

    let headerDom: React.ReactElement<any> | null = null;
    let footerDom: React.ReactElement<any> | null = null;

    if (renderHeader) {
      let content = renderHeader();
      if (typeof content === 'string') {
        content = <Text style={THEMES.Header}>{content}</Text>;
      }
      headerDom = <View>{content}</View>;
    }
    if (renderFooter) {
      let content = renderFooter();
      if (typeof content === 'string') {
        content = <Text style={THEMES.Footer}>{content}</Text>;
      }
      footerDom = <View>{content}</View>;
    }
    return (<View {...this.props} style={[style]}>
      {headerDom}
      <View style={THEMES.Body}>
        {children}
        <View style={[THEMES.BodyBottomLine]}></View>
      </View>
      {footerDom}
    </View>);
  }
}
