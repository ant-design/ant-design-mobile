import * as React from 'react';

export interface CardProps {
  full?: boolean;
  style?: {};
}

export interface CardHeaderProps {
  title?: any;
  /** need url of img, if this is string. */
  thumb?: React.ReactNode;
  extra?: any;
  thumbStyle?: {};
  style?: any;
}

export interface CardBodyProps {
  children?: any;
  style?: {};
}

export interface CardFooterProps {
  content?: any;
  extra?: any;
  className?: string;
  style?: {};
}
