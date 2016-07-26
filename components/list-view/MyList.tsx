import * as React from 'react';
import List from '../list';

export default React.createClass({
  render() {
    const { children, style, onScroll } = this.props;
    const divProps = { style, onScroll };
    return React.cloneElement(<List />, divProps, children);
  },
});
