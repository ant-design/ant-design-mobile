import { PropTypes } from 'react';
import * as React from 'react';
import { Text } from 'react-native';
const THEMES = require('./style/').ThemesList;

export default class Footer extends React.Component {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'middle', 'right'])
  };

  static defaultProps = {
    align: 'left'
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
