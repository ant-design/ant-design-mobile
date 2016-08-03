import * as React from 'react';
import List from '../list';

export default React.createClass({
  render() {
    const { children, className, style, onScroll } = this.props;
    const divProps = { className, style, onScroll };
    return React.cloneElement(<List />, divProps, children);
  },
});
