// import React from 'react';

export interface ImagePickerPropTypes {
  style?: {};
  files?: Array<{}>;
  onChange?: (files: Array<{}>, operationType: string, index?: number) => void;
  /* react-native only */
  styles?: any;
  /* web only */
  prefixCls?: string;
  className?: string;
  onImageClick?: (index?: number, files?: Array<{}>) => void;
  onAddImageClick?: () => void;
  selectable?: boolean;
}

export interface ImageRollProps {
  onCancel: () => void;
  onSelected: (imgObj: {}) => void;
}
