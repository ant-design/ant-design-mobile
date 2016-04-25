import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class List extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    prefixCls: 'am-list',
  };

  render() {
    let { style, children, className, prefixCls } = this.props;
    const wrapCls = classNames({
      [prefixCls]: true,
      [className]: className
    });

    return (
      <div className={wrapCls} style={style}>
        {children}
      </div>
    );
  }
}
