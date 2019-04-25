import classnames from 'classnames';
import * as React from 'react';
import Icon from '../icon';
import Marquee, { MarqueeProps } from './Marquee';
import { NoticeBarPropsType } from './PropsType';

export interface NoticeWebProps extends NoticeBarPropsType {
  marqueeProps?: MarqueeProps;
  className?: string;
  prefixCls?: string;
  style?: React.CSSProperties;
}

export default class NoticeBar extends React.Component<NoticeWebProps, any> {
  static defaultProps = {
    prefixCls: 'am-notice-bar',
    mode: '',
    icon: <Icon type="voice" size="xxs" />,
    onClick() {},
  };

  constructor(props: NoticeWebProps) {
    super(props);
    this.state = {
      show: true,
    };
  }

  onClick = () => {
    const { mode, onClick } = this.props;
    if (onClick) {
      onClick();
    }
    if (mode === 'closable') {
      this.setState({
        show: false,
      });
    }
  }

  render() {
    const {
      mode,
      icon,
      onClick,
      children,
      className,
      prefixCls,
      action,
      marqueeProps,
      ...restProps
    } = this.props;

    const extraProps: any = {};
    let operationDom: any = null;
    if (mode === 'closable') {
      operationDom = (
        <div
          className={`${prefixCls}-operation`}
          onClick={this.onClick}
          role="button"
          aria-label="close"
        >
          {action ? action : <Icon type="cross" size="md" />}
        </div>
      );
    } else {
      if (mode === 'link') {
        operationDom = (
          <div
            className={`${prefixCls}-operation`}
            role="button"
            aria-label="go to detail"
          >
            {action ? action : <Icon type="right" size="md" />}
          </div>
        );
      }
      extraProps.onClick = onClick;
    }

    const wrapCls = classnames(prefixCls, className);

    return this.state.show ? (
      <div className={wrapCls} {...restProps} {...extraProps} role="alert">
        {icon && (
      // tslint:disable-next-line:jsx-no-multiline-js
          <div className={`${prefixCls}-icon`} aria-hidden="true">
            {icon}
          </div>
        )}
        <div className={`${prefixCls}-content`}>
          <Marquee
            prefixCls={prefixCls}
            text={children as string}
            {...marqueeProps}
          />
        </div>
        {operationDom}
      </div>
    ) : null;
  }
}
