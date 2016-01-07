import React, {PropTypes} from 'react';
function noop() {}

const TopNotice = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    content: PropTypes.string,
    mode: PropTypes.string,
    operationTxt: PropTypes.string,
    onClick: PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      content: '',
      needOperation: true,
      operationTxt: '',
      onClick: noop,
    };
  },
  render() {
    const { prefixCls, content, mode, operationTxt, onClick } = this.props;
    let operationDom = '';
    switch(mode) {
    case 'close':
      operationDom = <div className={prefixCls + '-top-notice-operation'} onClick={onClick}><a className={prefixCls + '-top-notice-close'}/></div>;
      break;
    case 'operation':
      operationDom = <div className={prefixCls + '-top-notice-operation'} onClick={onClick}><a className={prefixCls + '-top-notice-go'}>{operationTxt}</a></div>;
      break;
    default:
      operationDom = '';
      break;
    }
    return (
      <div className={prefixCls + '-top-notice'}>
        <div className={prefixCls + '-top-notice-content'}>{content}</div>
        {operationDom}
      </div>
    );
  }
});
module.exports = TopNotice;
