interface ImagePickerPropTypes {
  style?: {};
  files?: Array<{}>;
  onChange?: (files: Array<{}>) => void;
  /* react-native only */
  styles?: any;
  /* web only */
  prefixCls?: string;
  className?: string;
}

export default ImagePickerPropTypes;
