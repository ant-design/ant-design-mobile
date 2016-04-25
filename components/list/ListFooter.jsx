import React, { PropTypes } from 'react';
import classNames from 'classnames';
function noop() {}

export default class ListFooter extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    align: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-list',
    align: 'left',
    onClick: noop,
  };

  onClick = (e) => {
    this.props.onClick(e);
  };

  render() {
    let { style, children, className, prefixCls, align } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-footer`]: true,
      [`${prefixCls}-right`]: align === 'right',
      [className]: className
    });
    return (
      <div className={wrapCls} style={style} onClick={this.onClick}>
        {children}
      </div>
    );
  }
}
