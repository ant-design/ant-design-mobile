interface ImagePickerPropTypes {
  style?: {};
  files?: Array<{}>;
  onChange?: (files: Array<{}>, operationType: string, index?: number) => void;
  /* react-native only */
  styles?: any;
  /* web only */
  prefixCls?: string;
  className?: string;
}

export default ImagePickerPropTypes;
