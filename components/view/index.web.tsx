import React from 'react';

export default class View extends React.Component<any, any> {
  static defaultProps = {
    Component: 'div',
  };
  render() {
    const props = {
      ...this.props,
    };
    if (Array.isArray(props.style)) {
      let style = {};
      props.style.forEach(s => {
        style = {
          ...style,
          ...s,
        };
      });
      props.style = style;
    }
    const { Component } = props;
    return <Component {...props}/>;
  }
}
