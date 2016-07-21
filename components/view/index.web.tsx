import * as React from 'react';
import assign from 'object-assign';

export default class View extends React.Component<any, any> {
  static defaultProps = {
    Component: 'div',
  };
  render() {
    const props = assign({}, this.props);
    if (Array.isArray(props.style)) {
      const style = {};
      props.style.forEach(s => {
        assign(style, s);
      });
      props.style = style;
    }
    const { Component } = props;
    return <Component {...props}/>;
  }
}
