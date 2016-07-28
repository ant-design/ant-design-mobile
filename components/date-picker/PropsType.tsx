interface Props {
  defaultDate: any;
  value?: any;
  format?: (x: any) => void;
  cols?: number;
  mode?: string;
  extra?: string;
  children?: any;
  /** rn only */
  triggerTypes?: string;
  /** web only */
  prefixCls?: string;
}

export default Props;
