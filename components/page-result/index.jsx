import React, {PropTypes} from 'react';
function noop() {}

const PageResult = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    brief: PropTypes.string,
    buttonTxt: PropTypes.string,
    buttonClick: PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      imgUrl: '',
      title: '',
      brief: '',
      buttonTxt: '',
      buttonClick: noop,
    };
  },
  render() {
    let { prefixCls, imgUrl, title, brief, buttonTxt, buttonClick } = this.props;
    let titleDom = title !== '' ? (<div className={prefixCls + '-page-result-title'}>{title}</div>) : null;
    let briefDom = brief !== '' ? (<div className={prefixCls + '-page-result-brief'}>{brief}</div>) : null;
    let buttonDom = buttonTxt !== '' ? (<div className={prefixCls + '-page-result-button'}>
      <button type="button" className={prefixCls + '-button ' + prefixCls + '-button-white'} onClick={buttonClick}>{buttonTxt}</button>
    </div>) : null;
    return (
      <div className={prefixCls + '-page-result'}>
        <div className={prefixCls + '-page-result-wrap'}>
          <div className={prefixCls + '-page-result-pic'} style={{backgroundImage: 'url(' + imgUrl + ')'}}></div>
          {titleDom}
          {briefDom}
          {buttonDom}
        </div>
      </div>
    );
  }
});
module.exports = PageResult;
