import * as React from 'react';

export interface CardPropsType {
  full?: boolean;
}

export interface CardHeaderPropsType {
  title?: React.ReactNode;
  /** need url of img, if this is string. */
  thumb?: React.ReactNode;
  extra?: React.ReactNode;
}

export interface CardFooterPropsType {
  content?: React.ReactNode;
  extra?: React.ReactNode;
}
