import React from 'react';

interface ResultProps {
  style?: React.CSSProperties;
  imgUrl?: string;
  img?: React.ReactNode;
  title?: React.ReactNode;
  message?: React.ReactNode;
  buttonText?: string;
  buttonType?: 'primary' | 'ghost';
  buttonClick?: () => void;
  /** below web only */
  prefixCls?: string;
  className?: string;
  /** below rn only */
  styles?: any;
}

export default ResultProps;
