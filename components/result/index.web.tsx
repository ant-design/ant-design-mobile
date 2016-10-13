import React from 'react';
import Button from '../button';
import classNames from 'classnames';
function noop() {}

export interface ResultProps {
  prefixCls?: string;
  style?: React.CSSProperties;
  className?: string;
  imgUrl?: string;
  title?: React.ReactNode;
  message?: React.ReactNode;
  buttonText?: string;
  buttonType?: 'primary' | 'ghost';
  buttonClick?: () => void;
}

export default class Result extends React.Component<ResultProps, any> {
  static defaultProps = {
    prefixCls: 'am-result',
    imgUrl: '',
    title: '',
    message: '',
    buttonText: '',
    buttonType: '',
    buttonClick: noop,
  };

  render() {
    let { prefixCls, imgUrl, title, message, buttonText, buttonClick, buttonType, className } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className]: className,
    });

    return (
      <div className={wrapCls}>
        <div className={`${prefixCls}-pic`} style={{ backgroundImage: `url(${imgUrl})` }}></div>
        { title !== '' ? (<div className={`${prefixCls}-title`}>{title}</div>) : null }
        { message !== '' ? (<div className={`${prefixCls}-message`}>{message}</div>) : null }
        { buttonText !== '' ? (<div className={`${prefixCls}-button`}>
          <Button type={buttonType} onClick={buttonClick}>{buttonText}</Button>
        </div>) : null }
      </div>
    );
  }
}
