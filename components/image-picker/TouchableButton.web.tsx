import React from 'react';
import splitObject from '../_util/splitObject';
import Touchable from 'rc-touchable';

class TouchableButton extends React.Component<any, any> {
  render() {
    const [{ children, prefixCls, activeStyle }, restProps] =
      splitObject(this.props, ['children', 'prefixCls', 'activeStyle']);

    return (
      <Touchable activeStyle={activeStyle} activeClassName={`${prefixCls}-active`}>
        <div {...restProps}>
          {children}
        </div>
      </Touchable>
    );
  }
}

export default TouchableButton;
