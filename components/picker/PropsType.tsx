interface Props {
  data: any;
  value?: Array<string|number>;
  format?: (values) => void;
  cols?: number;
  title?: string;
  extra?: string;
  okText?: string;
  dismissText?: string;
  children: any;
  /** web only */
  prefixCls?: string;
}

export default Props;
