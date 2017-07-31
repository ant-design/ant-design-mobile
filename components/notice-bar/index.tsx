import React from 'react';
import classNames from 'classnames';
import Icon from '../icon/index.web';
import NoticeBarProps from './PropsType';
import Marquee from './Marquee';

export default class NoticeBar extends React.Component<NoticeBarProps, any> {
  static defaultProps = {
    prefixCls: 'am-notice-bar',
    mode: '',
    icon: <Icon type={require('./style/assets/trips.svg')} size="xxs" />,
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

    let marquee = {
      loop: false,
      leading: 500,
      trailing: 800,
      fps: 40,
      style: {},
      ...marqueeProps,
    };

    return this.state.show ? (
      <div className={wrapCls} {...restProps} {...extraProps} role="alert">
        {icon ? <div className={`${prefixCls}-icon`} aria-hidden="true"> {icon} </div> : null}
        <div className={`${prefixCls}-content`}>
          <Marquee prefixCls={prefixCls} text={children} {...marquee} />
        </div>
        {operationDom}
      </div>
    ) : null;
  }
}
