/* tslint:disable:jsx-no-multiline-js */
import classnames from 'classnames';
import * as React from 'react';
import Button from '../button';
import { ResultPropsType } from './PropsType';

export interface ResultProps extends ResultPropsType {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default class Result extends React.Component<ResultProps, any> {
  static defaultProps = {
    prefixCls: 'am-result',
    buttonType: '',
    onButtonClick: () => {},
  };

  render() {
    const {
      prefixCls,
      className,
      style,
      img,
      imgUrl,
      title,
      message,
      buttonText,
      onButtonClick,
      buttonType,
    } = this.props;

    let imgContent: JSX.Element | null = null;
    if (img) {
      imgContent = <div className={`${prefixCls}-pic`}>{img}</div>;
    } else if (imgUrl) {
      imgContent = (
        <div
          className={`${prefixCls}-pic`}
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
      );
    }

    return (
      <div
        className={classnames(prefixCls, className)}
        style={style}
        role="alert"
      >
        {imgContent}
        {title ? <div className={`${prefixCls}-title`}>{title}</div> : null}
        {message ? (
          <div className={`${prefixCls}-message`}>{message}</div>
        ) : null}
        {buttonText ? (
          <div className={`${prefixCls}-button`}>
            <Button type={buttonType} onClick={onButtonClick}>
              {buttonText}
            </Button>
          </div>
        ) : null}
      </div>
    );
  }
}
