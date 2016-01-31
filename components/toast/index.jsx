import React, {PropTypes} from 'react';
import classNames from 'classnames';

const Toast = React.createClass({
  propTypes: {
    mode: PropTypes.string,
    children: PropTypes.string,
  },
  getDefaultProps() {
    return {
      mode: 'loading'
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
      'am-toast-network': mode === 'network',
    });

    let iconStyle = children ? { marginTop: '20px' } : {};

    return (
      <div className={wrapCls}>
        <div className="am-toast-text">
          <span className={toastClass} style={iconStyle}/>{children}
        </div>
      </div>
    );
  }
});
module.exports = Toast;
