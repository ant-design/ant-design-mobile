import * as React from 'react';
import { View } from 'react-native';
import assign from 'object-assign';
import theme from './style/index';
import { ListBodyProps } from './ListPropTypes';

const THEMES = theme.ThemesList;

function makeArray(array) {
  return array.length == null ? [array] : array;
}

export default class Body extends React.Component<ListBodyProps, any> {
  render() {
    const {error, style, children} = this.props;
    const childrenArray = makeArray(children);
    return (<View {...this.props} style={[THEMES.Body,
      error ? THEMES.Error.Body : {}, style]}>
      {
        childrenArray.map((item, index) => {
          if (index === childrenArray.length - 1) {
            return React.cloneElement(item, assign({}, item.props, {last: true, key: index}));
          } else {
            return item;
          }
        })
      }
    </View>);
  }
}
