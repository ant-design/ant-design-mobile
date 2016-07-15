import * as React from 'react';
import { PropTypes } from 'react';
import { View } from 'react-native';
import theme from './style/index';
const THEMES = theme.ThemesList;

export default class Body extends React.Component {
  static propTypes = {
    error: PropTypes.bool
  };

  render() {
    return (<View {...this.props} style={[THEMES.Body,
      this.props.error ? THEMES.Error.Body : {},
      this.props.style]}>
      {this.props.children}
    </View>);
  }
}
