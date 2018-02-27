// import React from 'react';

export interface ImagePickerPropTypes {
  style?: {};
  files?: Array<{}>;
  onChange?: (files: Array<{}>, operationType: string, index?: number) => void;
  onImageClick?: (index?: number, files?: Array<{}>) => void;
  onAddImageClick?: () => void;
  onFail?: (msg: string) => void;
  selectable?: boolean;
  multiple?: boolean;
  accept?: string;
}
