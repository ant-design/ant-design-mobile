import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import NoticeBarProps from './PropsType';
import Marquee, { MarqueeProp } from './Marquee';

export interface INoticeWebProps extends NoticeBarProps {
  marqueeProps?: MarqueeProp;
  className?: string;
  prefixCls?: string;
  style?: {};
}

export default class NoticeBar extends React.Component<INoticeWebProps, any> {
  static defaultProps = {
    prefixCls: 'am-notice-bar',
    mode: '',
    icon: <Icon type="voice" size="xxs"/>,
    onClick() {},
  };

  constructor(props) {
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
    const { mode, icon, onClick, children, className, prefixCls, marqueeProps, ...restProps } = this.props;

    const extraProps: any = {};
    let operationDom: any = null;
    if (mode === 'closable') {
      operationDom = (
        <div className={`${prefixCls}-operation`} onClick={this.onClick} role="button" aria-label="close">
          <Icon type="cross" size="md" />
        </div>
      );
    } else {
      if (mode === 'link') {
        operationDom = (
          <div className={`${prefixCls}-operation`} role="button" aria-label="go to detail">
            <Icon type="right" size="md" />
          </div>
        );
      }
      extraProps.onClick = onClick;
    }

    const wrapCls = classNames({
      [prefixCls as string]: true,
      [className as string]: !!className,
    });

    return this.state.show ? (
      <div className={wrapCls} {...restProps} {...extraProps} role="alert">
        {icon && <div className={`${prefixCls}-icon`} aria-hidden="true"> {icon} </div>}
        <div className={`${prefixCls}-content`}>
          <Marquee prefixCls={prefixCls} text={children} style={{}} {...marqueeProps} />
        </div>
        {operationDom}
      </div>
    ) : null;
  }
}
