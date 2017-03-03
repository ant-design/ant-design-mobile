import React from 'react';

interface AccordionProps {
  style?: React.CSSProperties;
  /** below web only */
  className?: string;
  prefixCls?: string;
  activeKey?: string | Array<string>;
  defaultActiveKey?: string | Array<string>;
  openAnimation?: any;
  accordion?: boolean;
  onChange?: (x: any) => void;
  styles?: any;
}

export default AccordionProps;
