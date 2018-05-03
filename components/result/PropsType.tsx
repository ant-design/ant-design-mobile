import * as React from 'react';

export interface ResultPropsType {
  imgUrl?: string;
  img?: React.ReactNode;
  title?: React.ReactNode;
  message?: React.ReactNode;
  buttonText?: string;
  buttonType?: 'primary' | 'ghost';
  onButtonClick?: () => void;
}
