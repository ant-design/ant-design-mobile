import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class ListBody extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'am-list',
  };

  render() {
    let { prefixCls, children, className, ...others } = this.props;
    const listBodyCls = classNames({
      [`${prefixCls}-body`]: true,
      [className]: className
    });

    return (
      <div {...others} className={listBodyCls}>
        {children}
      </div>
    );
  }
}
