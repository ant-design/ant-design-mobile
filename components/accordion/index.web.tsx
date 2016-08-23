import * as React from 'react';
import RcCollapse, { Panel } from 'rc-collapse';

export interface AccordionProps {
  prefixCls?: string;
  style?: React.CSSProperties;
}

export default class Accordion extends React.Component<AccordionProps, any> {
  static Panel = Panel;

  static defaultProps = {
    prefixCls: 'am-accordion',
  };

  render() {
    return <RcCollapse {...this.props} />;
  }
}
