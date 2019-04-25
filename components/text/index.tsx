import * as React from 'react';
import View, { ViewProps } from '../view';

export default class Text extends React.Component<
  ViewProps<HTMLSpanElement>,
  any
> {
  static defaultProps = {
    Component: 'span',
  };
  render() {
    return <View {...this.props as any} />;
  }
}
