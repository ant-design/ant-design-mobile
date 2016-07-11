interface Props {
  data:Array<Object>;
  value?:Array<string|number>;
  format?:(values) => void;
  cols?:number;
  /** web only */
  prefixCls?:string;
}

export default Props;
