import * as React from 'react';
import { Text } from 'react-native';
import theme from './style/index';
const THEMES = theme.ThemesList;

export default class Header extends React.Component {
  render() {
    return (<Text style={THEMES.Header}>{this.props.children}</Text>);
  }
}
