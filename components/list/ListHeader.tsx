import React from 'react';
import { Text } from 'react-native';
const THEMES = require('./style/').ThemesList;

export default class Header extends React.Component {
  render() {
    return (<Text style={THEMES.Header}>{this.props.children}</Text>);
  }
}
