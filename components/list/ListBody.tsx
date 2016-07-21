import * as React from 'react';
import { PropTypes } from 'react';
import { View } from 'react-native';
import theme from './style/index';
const THEMES = theme.ThemesList;

export default class Body extends React.Component {
  static propTypes = {
    error: PropTypes.bool,
  };

  render() {
    const { error, style, children } = this.props;
    return (<View {...this.props} style={[THEMES.Body,
      error ? THEMES.Error.Body : {}, style]}>
      {
        this.props.children.map((item, index) => {
          if (index === children.length - 1) {
            return React.cloneElement(item, Object.assign({}, item.props, {last: true, key: index}));
          } else {
            return item;
          }
        })
      }
    </View>);
  }
}
