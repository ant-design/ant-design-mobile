import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class ListBody extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    prefixCls: 'am-list',
  };

  render() {
    let { style, children, className, prefixCls } = this.props;
    const listBodyCls = classNames({
      [`${prefixCls}-body`]: true,
      [className]: className
    });
    return (
      <div className={listBodyCls} style={style}>
        {children}
      </div>
    );
  }
}
