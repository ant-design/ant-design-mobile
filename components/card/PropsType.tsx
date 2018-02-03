import React from 'react';

export interface CardPropsType {
  full?: boolean;
}

export interface CardHeaderPropsType {
  title?: React.ReactType;
  /** need url of img, if this is string. */
  thumb?: React.ReactNode;
  extra?: React.ReactType;
}

export interface CardFooterPropsType {
  content?: React.ReactType;
  extra?: React.ReactType;
}
