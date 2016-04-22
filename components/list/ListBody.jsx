import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class ListBody extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
  };

  render() {
    let { style, children, className } = this.props;
    const listBodyCls = classNames({
      'am-list-body': true,
      [className]: className
    });
    return (
      <div className={listBodyCls} style={style}>
        {children}
      </div>
    );
  }
}
