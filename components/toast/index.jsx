import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './index.less';

const Toast = React.createClass({
  propTypes: {
    mode: PropTypes.string,
    children: PropTypes.string,
  },
  getDefaultProps() {
    return {
      mode: ''
    };
  },
  render() {
    const { mode, children, className } = this.props;
    const wrapCls = classNames({
      'am-toast': true,
      [className] : className
    });

    let toastClass = classNames({
      'am-toast-icon': true,
      'am-icon': true,
      'am-toast-loading': mode === 'loading',
      'am-toast-success': mode === 'success',
      'am-toast-fail': mode === 'fail',
      'am-toast-network': mode === 'network'
    });

    let iconDom = mode !== '' ? <span className={toastClass}/> : null;

    return (
      <div className={wrapCls}>
        <div className="am-toast-text">
          {iconDom}
          {children}
        </div>
      </div>
    );
  }
});
module.exports = Toast;
