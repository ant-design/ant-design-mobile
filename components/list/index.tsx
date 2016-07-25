// List
import * as React from 'react';
import { View } from 'react-native';
import Body from './ListBody';
import Item from './ListItem';
import Header from './ListHeader';
import Footer from './ListFooter';

export default class List extends React.Component<any, any> {
  render() {
    return (<View {...this.props} style={[this.props.style]}>{this.props.children}</View>);
  }
}

List.Header = Header;
List.Body = Body;
List.Footer = Footer;
List.Item = Item;
