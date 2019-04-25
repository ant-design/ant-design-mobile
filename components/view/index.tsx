import * as React from 'react';
export interface ViewProps<T> extends React.HTMLProps<T> {
  Component?: string;
}
export default class View extends React.Component<
  ViewProps<HTMLDivElement>,
  any
> {
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
    const { Component = 'div', ...restProps } = props;
    return <Component {...restProps} />;
  }
}
