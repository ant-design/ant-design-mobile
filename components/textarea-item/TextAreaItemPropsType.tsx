interface TextAreaItemProps {
  clear?:boolean;
  error?:boolean;
  editable?:editable;
  rows?:number;
  value?:string;
  placeholder?:string;
  count?:number;
  keyboardType?:string;
  /** web only */
  prefixCls?:string;
}

export default TagProps;
