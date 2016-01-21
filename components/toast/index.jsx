import React, {PropTypes} from 'react';

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
    const { mode, children } = this.props;
    let toastClass = 'am-toast-icon am-icon am-toast-' + mode;

    let iconStyle = {};
    if(!children) {
      iconStyle = {
        marginTop: '20px'
      };
    }
    return (
      <div className="am-toast">
        <div className="am-toast-text">
          <span className={toastClass} style={iconStyle}/>{children}
        </div>
      </div>
    );
  }
});
module.exports = Toast;
