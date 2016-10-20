import React from 'react';
import splitObject from '../_util/splitObject';
import touchableFeedback from '../_util/touchableFeedback';

class ButtonListItem extends React.Component<any, any> {
  render() {
    const [{ children, className, prefixCls, onClick, touchFeedback }, restProps] =
      splitObject(this.props, ['children', 'className', 'prefixCls', 'onClick', 'active']);
    return (
      <div {...restProps}
        className={touchFeedback ?
          `${className} ${prefixCls}-active` : `${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
};

export default touchableFeedback<{
  prefixCls?: string;
  className?: string;
  onClick?: (e: any) => void;
}>(ButtonListItem);
