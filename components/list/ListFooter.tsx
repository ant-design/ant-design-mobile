import * as React from 'react';
import { Text } from 'react-native';
import theme from './style/index';
const THEMES = theme.ThemesList;

export interface FooterProps {
  align?: 'left' | 'middle' | 'right';
}

export default class Footer extends React.Component<FooterProps, any> {
  static defaultProps = {
    align: 'left',
  };

  render() {
    let alignStyle = {};
    switch (this.props.align) {
      case 'middle':
        alignStyle = { textAlign: 'center' };
        break;
      case 'right':
        alignStyle = { textAlign: 'right' };
        break;
      default:
        alignStyle = { textAlign: 'left' };
        break;
    }

    return (<Text style={[THEMES.Footer, alignStyle]}>{this.props.children}</Text>);
  }
}
