import React from 'react';
import Button from '../button';
import classNames from 'classnames';
import ResultProps from './PropsType';
function noop() {}

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
      [className as string]: className,
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
