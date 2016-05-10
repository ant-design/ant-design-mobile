import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class ListFooter extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'am-list',
  };


  render() {
    let { prefixCls, children, className, ...other } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-footer`]: true,
      [className]: className
    });
    return (
      <div {...other} className={wrapCls}>
        {children}
      </div>
    );
  }
}
