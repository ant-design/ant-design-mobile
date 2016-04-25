import React, { PropTypes } from 'react';
import classNames from 'classnames';
function noop() {}

export default class ListHeader extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    align: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-list',
    onClick: noop,
  };

  onClick = (e) => {
    this.props.onClick(e);
  };

  render() {
    let { style, children, className, prefixCls } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-header`]: true,
      [className]: className
    });

    return (
      <div className={wrapCls} style={style} onClick={this.onClick}>{children}</div>
    );
  }
}
