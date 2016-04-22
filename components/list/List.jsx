import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class List extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
  };

  render() {
    let { className } = this.props;
    const wrapCls = classNames({
      'am-list': true,
      [className]: className
    });

    return (
      <div className={wrapCls} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}
