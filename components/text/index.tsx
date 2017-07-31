import React from 'react';
import View from '../view/index.web';

export default class Text extends React.Component<any, any> {
  static defaultProps = {
    Component: 'span',
  };
  render() {
    return <View {...this.props}/>;
  }
}
