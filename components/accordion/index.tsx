import React from 'react';
import RcCollapse, { Panel } from 'rc-collapse';
import BasePropsType from './PropsType';

export interface AccordionProps extends BasePropsType {
  className?: string;
  prefixCls?: string;
  openAnimation?: any;
  accordion?: boolean;
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
