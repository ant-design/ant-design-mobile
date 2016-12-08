import React from 'react';
import splitObject from '../_util/splitObject';
import Touchable from 'rc-touchable';

class ButtonListItem extends React.Component<any, any> {
  render() {
    const [{ children, prefixCls, activeStyle }, restProps] =
      splitObject(this.props, ['children', 'prefixCls', 'activeStyle']);
    return (
      <Touchable activeClassName={`${prefixCls}-active`} activeStyle={activeStyle}>
        <div {...restProps}>
          {children}
        </div>
      </Touchable>
    );
  }
}

export default ButtonListItem;
