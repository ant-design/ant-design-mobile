import React, { PropTypes } from 'react';
import Button from '../button';
import classNames from 'classnames';
function noop() {}

export default class PageResult extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    brief: PropTypes.string,
    buttonTxt: PropTypes.string,
    buttonType: PropTypes.string,
    buttonGhost: PropTypes.bool,
    buttonClick: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-page-result',
    imgUrl: '',
    title: '',
    brief: '',
    buttonTxt: '',
    buttonType: 'default',
    buttonGhost: false,
    buttonClick: noop,
  };

  render() {
    let { prefixCls, imgUrl, title, brief, buttonTxt, buttonClick, buttonType, buttonGhost, style, className } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className]: className
    });

    return (
      <div {...this.props} className={wrapCls} style={style}>
        <div className={`${prefixCls}-pic`} style={{ backgroundImage: `url(${imgUrl})` }}></div>
        { title !== '' ? (<div className={`${prefixCls}-title`}>{title}</div>) : null }
        { brief !== '' ? (<div className={`${prefixCls}-brief`}>{brief}</div>) : null }
        { buttonTxt !== '' ? (<div className={`${prefixCls}-button`}>
          <Button type={buttonType} ghost={buttonGhost} onClick={buttonClick}>{buttonTxt}</Button>
        </div>) : null }
      </div>
    );
  }
}
