// import React from 'react';

export interface ImagePickerPropTypes {
  style?: {};
  files?: Array<{}>;
  onChange?: (files: Array<{}>, operationType: string, index?: number) => void;
  onImageClick?: (index?: number, files?: Array<{}>) => void;
  onAddImageClick?: () => void;
  selectable?: boolean;
}
