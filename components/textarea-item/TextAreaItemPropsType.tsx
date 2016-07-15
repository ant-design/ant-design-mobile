interface TextAreaItemProps {
  clear?:boolean;
  error?:boolean;
  editable?:boolean;
  rows?:number;
  value?:string;
  placeholder?:string;
  count?:number;
  keyboardType?:string;
  /** web only */
  prefixCls?:string;
}

export default TextAreaItemProps;
