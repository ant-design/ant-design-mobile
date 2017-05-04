import React from 'react';

interface AccordionProps {
  styles?: any;
  /** below web only */
  className?: string;
  prefixCls?: string;
  activeKey?: string | Array<string>;
  defaultActiveKey?: string | Array<string>;
  openAnimation?: any;
  accordion?: boolean;
  onChange?: (x: any) => void;
  style?: React.CSSProperties;
}

export default AccordionProps;
