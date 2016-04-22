import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class ListHeader extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    align: PropTypes.string,
    onClick: PropTypes.func,
  };

  onClick = (e) => {
    this.props.onClick(e);
  };

  render() {
    let { style, children, className } = this.props;
    const wrapCls = classNames({
      'am-list-header': true,
      [className]: className
    });

    return (
      <div className={wrapCls} style={style} onClick={this.onClick}>{children}</div>
    );
  }
}
