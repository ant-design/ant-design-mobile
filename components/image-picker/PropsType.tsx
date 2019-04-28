// import * as React from 'react';

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
  length?: number | string;
  capture?: any; // 本应该是boolean | string; 但是因为@types/react中interface InputHTMLAttributes<T>定义问题，写成any跳过ts检查
  disableDelete?: boolean, // 是否隐藏删除按钮，默认false
}
