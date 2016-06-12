import React, { PropTypes, View } from 'react-native';
const THEMES = require('./style/index.ios').ThemesList;

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
