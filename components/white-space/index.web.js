import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class WhiteSpace extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    mode: PropTypes.oneOf([4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48]),
  };

  static defaultProps = {
    prefixCls: 'am-whitespace',
    mode: 8,
  };

  render() {
    const { prefixCls, mode, className, ...others } = this.props;
    let wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className]: className
    });
    wrapCls += ` ${prefixCls}-ws${mode}`;

    return (
      <div {...others} className={wrapCls} />
    );
  }
}
