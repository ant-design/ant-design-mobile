import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class FlexItem extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    prefixCls: 'am-flexbox'
  };
  render() {
    const { children, className, prefixCls, ...others } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [className]: className
    });
    return (
      <div
        {...others}
        className={wrapCls}
      >{children}</div>
    );
  }
}
