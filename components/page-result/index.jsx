import React, {PropTypes} from 'react';
function noop() {}

const PageResult = React.createClass({
  propTypes: {
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    brief: PropTypes.string,
    buttonTxt: PropTypes.string,
    buttonClick: PropTypes.func,
  },
  getDefaultProps() {
    return {
      imgUrl: '',
      title: '',
      brief: '',
      buttonTxt: '',
      buttonClick: noop,
    };
  },
  render() {
    let { imgUrl, title, brief, buttonTxt, buttonClick } = this.props;
    let titleDom = title !== '' ? (<div className="am-page-result-title">{title}</div>) : null;
    let briefDom = brief !== '' ? (<div className="am-page-result-brief">{brief}</div>) : null;
    let buttonDom = buttonTxt !== '' ? (<div className="am-page-result-button">
      <button type="button" className="am-button am-button-white" onClick={buttonClick}>{buttonTxt}</button>
    </div>) : null;
    return (
      <div className="am-page-result">
        <div className="am-page-result-wrap">
          <div className="am-page-result-pic" style={{backgroundImage: 'url(' + imgUrl + ')'}}></div>
          {titleDom}
          {briefDom}
          {buttonDom}
        </div>
      </div>
    );
  }
});
module.exports = PageResult;
