import React, {PropTypes} from 'react';
function noop() {}

const TopNotice = React.createClass({
  propTypes: {
    content: PropTypes.string,
    mode: PropTypes.string,
    operationTxt: PropTypes.string,
    onClick: PropTypes.func,
  },
  getDefaultProps() {
    return {
      content: '',
      needOperation: true,
      operationTxt: '',
      onClick: noop,
    };
  },
  render() {
    const { content, mode, operationTxt, onClick } = this.props;
    let operationDom = '';
    switch(mode) {
    case 'close':
      operationDom = <div className="am-top-notice-operation" onClick={onClick}><a className="am-top-notice-close"/></div>;
      break;
    case 'operation':
      operationDom = <div className="am-top-notice-operation" onClick={onClick}><a className="am-top-notice-go">{operationTxt}</a></div>;
      break;
    default:
      operationDom = '';
      break;
    }
    return (
      <div className="am-top-notice">
        <div className="am-top-notice-content">{content}</div>
        {operationDom}
      </div>
    );
  }
});
module.exports = TopNotice;
