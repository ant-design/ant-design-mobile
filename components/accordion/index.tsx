import RcCollapse, { Panel } from 'rc-collapse';
import React, { CSSProperties } from 'react';
import { AccordionPropsTypes } from './PropsType';

export interface AccordionProps extends AccordionPropsTypes {
  className?: string;
  prefixCls?: string;
  openAnimation?: any;
  accordion?: boolean;
  style?: CSSProperties;
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
