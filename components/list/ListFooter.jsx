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
    align: 'left',
    onClick: noop,
  };

  onClick = (e) => {
    this.props.onClick(e);
  };

  render() {
    let { style, align, children, className } = this.props;
    const wrapCls = classNames({
      'am-list-footer': true,
      'am-ft-right': align === 'right',
      [className]: className
    });
    return (
      <div className={wrapCls} style={style} onClick={this.onClick}>
        {children}
      </div>
    );
  }
}
