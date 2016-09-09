// List
import * as React from 'react';
import { View } from 'react-native';
import Body from './ListBody';
import Item from './ListItem';
import Header from './ListHeader';
import Footer from './ListFooter';

import { ListProps } from './ListPropTypes';
import ReactElement = __React.ReactElement;

function isBodyHeaderFooter(children) {
  let isOld;
  React.Children.forEach(children, (c) => {
    const type = c && (c as ReactElement<any>).type;
    if (type === Header || type === Footer || type === Body) {
      isOld = true;
    }
  });
  return isOld;
}

export default class List extends React.Component<ListProps, any> {
  static Header: any;
  static Body: any;
  static Footer: any;
  static Item: any;

  render() {
    let { children, style, title, footer } = this.props;
    return (<View {...this.props} style={[style]}>
      {title ? <Header>{title}</Header> : null}
      {isBodyHeaderFooter(children) ? children :<Body>{children}</Body>}
      {footer ? <Footer>{footer}</Footer> : null}
    </View>);
  }
}

List.Header = Header;
List.Body = Body;
List.Footer = Footer;
List.Item = Item;
