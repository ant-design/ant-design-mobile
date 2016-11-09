import React from 'react';

interface ResultProps {
  prefixCls?: string;
  style?: React.CSSProperties;
  className?: string;
  imgUrl?: string;
  title?: React.ReactNode;
  message?: React.ReactNode;
  buttonText?: string;
  buttonType?: 'primary' | 'ghost';
  buttonClick?: () => void;
}

export default ResultProps;
