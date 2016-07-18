import * as React from 'react';
import splitObject from '../_util/splitObject';
export default props => {
  let [{type, className}, restProps] = splitObject(props,
    ['type', 'className']);
  className += ` anticon anticon-${type}`;
  return <i className={className} {...restProps} />;
};
