// List
import * as React from 'react';
import { View } from 'react-native';
import Body from './ListBody';
import Item from './ListItem';
import Header from './ListHeader';
import Footer from './ListFooter';

import ListProps from './ListPropTypes';

export default class List extends React.Component<ListProps, any> {
  static Header: any;
  static Body: any;
  static Footer: any;
  static Item: any;

  render() {
    let { children, style, title, footer } = this.props;
    return (<View {...this.props} style={[style]}>
      {title ? <Header>{title}</Header> : null}
      {children}
      {footer ? <Footer>{footer}</Footer> : null}
    </View>);
  }
}

List.Header = Header;
List.Body = Body;
List.Footer = Footer;
List.Item = Item;
