/* tslint:disable:no-unused-variable */
import React from 'react';
/* tslint:enable:no-unused-variable */
export interface IconProps {
  type: string;
  className?: string;
  title?: string;
  onClick?: (e) => void;
}

export default (props: IconProps) => {
  const { type, className = '' } = props;
  return <i {...props} className={`${className} anticon anticon-${type}`.trim()} />;
};
