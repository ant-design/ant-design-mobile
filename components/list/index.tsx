// List
import * as React from 'react';
import { View } from 'react-native';
import Body from './ListBody';
import Item from './ListItem';
import Header from './ListHeader';
import Footer from './ListFooter';

export default class List extends React.Component<any, any> {
  static Header: any;
  static Body: any;
  static Footer: any;
  static Item: any;
  render() {
    const style = {
      marginTop: 8,
      marginBottom: 8,
    };
    return (<View {...this.props} style={[style, this.props.style]}>{this.props.children}</View>);
  }
}

List.Header = Header;
List.Body = Body;
List.Footer = Footer;
List.Item = Item;
