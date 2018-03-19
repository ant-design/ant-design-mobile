import React from 'react';

export interface CardPropsType {
  full?: boolean;
}

export interface CardHeaderPropsType {
  title?: JSX.Element;
  /** need url of img, if this is string. */
  thumb?: React.ReactNode;
  extra?: JSX.Element;
}

export interface CardFooterPropsType {
  content?: JSX.Element;
  extra?: JSX.Element;
}
