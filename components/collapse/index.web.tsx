import * as React from 'react';
import RcCollapse from 'rc-collapse';

export interface CollapseProps {
  prefixCls?: string;
  style?: React.CSSProperties;
}

export default class Collapse extends React.Component<CollapseProps, any> {
  static Panel = RcCollapse.Panel;

  static defaultProps = {
    prefixCls: 'am-collapse',
  };

  render() {
    return <RcCollapse {...this.props} />;
  }
}
