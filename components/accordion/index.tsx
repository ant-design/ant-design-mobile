import RcCollapse, { Panel } from 'rc-collapse';
import * as React from 'react';
import { AccordionPropsTypes } from './PropsType';

export interface AccordionProps extends AccordionPropsTypes {
  className?: string;
  prefixCls?: string;
  openAnimation?: any;
  accordion?: boolean;
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
