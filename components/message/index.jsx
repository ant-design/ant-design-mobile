import React, {PropTypes} from 'react';

const Message = React.createClass({
  propTypes: {
    type: PropTypes.string,
    main: PropTypes.string,
    sub: PropTypes.string,
  },
  getDefaultProps() {
    return {
      type: 'success',
      main: '',
      sub: '',
    };
  },
  render() {
    const { type, main, sub } = this.props;
    return (
      <div className="am-message">
        <div className={'am-message-icon am-icon message-' + type}></div>
        <div className={'am-message-main am-message-main-' + type}>{main}</div>
        <div className="am-message-sub">{sub}</div>
      </div>
    );
  }
});
module.exports = Message;
