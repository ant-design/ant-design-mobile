import React from 'react';

export interface CardPropsType {
  full?: boolean;
}

export interface CardHeaderPropsType {
  title?: string | JSX.Element;
  /** need url of img, if this is string. */
  thumb?: React.ReactNode;
  extra?: string | JSX.Element;
}

export interface CardFooterPropsType {
  content?: string | JSX.Element;
  extra?: string | JSX.Element;
}
