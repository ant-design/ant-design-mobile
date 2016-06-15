// List
import React from 'react';
import { View } from 'react-native';
import Body from './ListBody.ios';
import Item from './ListItem.ios';
import Header from './ListHeader.ios';
import Footer from './ListFooter.ios';


export default class List extends React.Component {
  render() {
    const style = {
      marginTop: 8,
      marginBottom: 8
    };
    return (<View {...this.props} style={[style, this.props.style]}>{this.props.children}</View>);
  }
}

List.Header = Header;
List.Body = Body;
List.Footer = Footer;
List.Item = Item;
