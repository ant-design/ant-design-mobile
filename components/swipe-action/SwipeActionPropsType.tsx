interface SwipeActionProps {
  /** whether button is disabled*/
  autoClose?:boolean;
  disabled?:boolean;
  title?:string;
  left?:Array<{}>;
  right?:Array<{}>;
  onOpen?:() => void;
  style?:{};
  /** web only */
  prefixCls?:string;
  onClose?:() => void;
}

export default SwipeActionProps;
