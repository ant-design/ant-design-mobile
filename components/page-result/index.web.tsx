import React, { PropTypes } from 'react';
import Button from '../button';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';
function noop() {}

export interface PageResultProps {
  prefixCls?: string,
  style?: React.CSSProperties,
  imgUrl?: string,
  title?: string,
  message?: string,
  buttonTxt?: string,
  buttonType?: string,
  buttonGhost?: string,
  buttonClick?: Function,
}

export default class PageResult extends React.Component<PageResultProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
    buttonTxt: PropTypes.string,
    buttonType: PropTypes.string,
    buttonGhost: PropTypes.bool,
    buttonClick: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-page-result',
    imgUrl: '',
    title: '',
    message: '',
    buttonTxt: '',
    buttonType: 'default',
    buttonGhost: false,
    buttonClick: noop,
  };

  render() {
    let [{prefixCls, imgUrl, title, message, buttonTxt, buttonClick, buttonType, buttonGhost, className}, restProps] = splitObject(this.props,
      ['prefixCls', 'imgUrl', 'title', 'message', 'className',
        'buttonTxt', 'buttonClick', 'buttonType', 'buttonGhost']);
    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className]: className
    });

    return (
      <div {...restProps} className={wrapCls}>
        <div className={`${prefixCls}-pic`} style={{ backgroundImage: `url(${imgUrl})` }}></div>
        { title !== '' ? (<div className={`${prefixCls}-title`}>{title}</div>) : null }
        { message !== '' ? (<div className={`${prefixCls}-message`}>{message}</div>) : null }
        { buttonTxt !== '' ? (<div className={`${prefixCls}-button`}>
          <Button type={buttonType} ghost={buttonGhost} onClick={buttonClick}>{buttonTxt}</Button>
        </div>) : null }
      </div>
    );
  }
}
