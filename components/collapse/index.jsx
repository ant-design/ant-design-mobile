import React from 'react';
import RcCollapse from 'rc-collapse';

export default class Collapse extends React.Component {
  static Panel = RcCollapse.Panel;

  static defaultProps = {
    prefixCls: 'am-collapse',
  };

  render() {
    return <RcCollapse {...this.props} />;
  }
}
