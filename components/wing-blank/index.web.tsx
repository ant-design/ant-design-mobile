import React, {PropTypes} from 'react';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';
export default class WingBlank extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    mode: PropTypes.oneOf([4, 8, 12, 16, 20, 24, 28, 32]),
  };

  static defaultProps = {
    prefixCls: 'am-wingblank',
    mode: 8,
  };

  render() {
    let [{prefixCls, mode, className, children}, restProps] = splitObject(this.props,
      ['prefixCls', 'mode', 'className', 'children']);
    let wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className]: className
    });
    wrapCls += ` ${prefixCls}-wb${mode}`;

    return (
      <div {...restProps} className={wrapCls}>
        {children}
      </div>
    );
  }
}
