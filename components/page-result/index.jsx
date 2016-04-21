import React, { PropTypes } from 'react';
import Button from '../button';
import classNames from 'classnames';
import './index.less';
function noop() {}

const PageResult = React.createClass({
  propTypes: {
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    brief: PropTypes.string,
    buttonTxt: PropTypes.string,
    buttonMode: PropTypes.string,
    buttonClick: PropTypes.func,
  },
  getDefaultProps() {
    return {
      imgUrl: '',
      title: '',
      brief: '',
      buttonTxt: '',
      buttonMode: 'white',
      buttonClick: noop,
    };
  },
  render() {
    let { imgUrl, title, brief, buttonTxt, buttonClick, buttonMode, className } = this.props;
    const wrapCls = classNames({
      'am-page-result': true,
      [className]: className
    });

    let titleDom = title !== '' ? (<div className="am-page-result-title">{title}</div>) : null;
    let briefDom = brief !== '' ? (<div className="am-page-result-brief">{brief}</div>) : null;
    let buttonDom = buttonTxt !== '' ? (<div className="am-page-result-button">
      <Button mode={buttonMode} onClick={buttonClick}>{buttonTxt}</Button>
    </div>) : null;
    return (
      <div className={wrapCls}>
        <div className="am-page-result-wrap">
          <div className="am-page-result-pic" style={{backgroundImage: `url(${imgUrl})`}}></div>
          {titleDom}
          {briefDom}
          {buttonDom}
        </div>
      </div>
    );
  }
});
module.exports = PageResult;
