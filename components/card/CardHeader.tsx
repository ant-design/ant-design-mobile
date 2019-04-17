import classnames from 'classnames';
import * as React from 'react';
import { CardHeaderPropsType } from './PropsType';

export interface CardHeaderProps extends CardHeaderPropsType {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  thumbStyle?: React.CSSProperties;
}

export default class CardHeader extends React.Component<CardHeaderProps, any> {
  static defaultProps = {
    prefixCls: 'am-card',
    thumbStyle: {},
  };

  render() {
    const {
      prefixCls,
      className,
      title,
      thumb,
      thumbStyle,
      extra,
      ...restProps
    } = this.props;
    const wrapCls = classnames(`${prefixCls}-header`, className);

    return (
      <div className={wrapCls} {...restProps}>
        <div className={`${prefixCls}-header-content`}>
          {typeof thumb === 'string' ? (
          // tslint:disable-next-line:jsx-no-multiline-js
            <img style={thumbStyle} src={thumb} />
          ) : (
            thumb
          )}
          {title}
        </div>
        {extra ? (
        // tslint:disable-next-line:jsx-no-multiline-js
          <div className={`${prefixCls}-header-extra`}>{extra}</div>
        ) : null}
      </div>
    );
  }
}
