/* tslint:disable:no-switch-case-fall-through */
import React from 'react';
import classNames from 'classnames';
import getDataAttr from '../_util/getDataAttr';
import Icon from '../icon';
import NoticeBarProps from './NoticeBarPropsType';

export default class NoticeBar extends React.Component<NoticeBarProps, any> {
  static defaultProps = {
    prefixCls: 'am-notice-bar',
    mode: '',
    onClick() {},
  };

  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  onClick() {
    const { mode, onClick } = this.props;
    onClick();
    if (mode === 'closable') {
      this.setState({
        show: false,
      });
    }
  }

  render() {
    const { prefixCls, children, mode, type, onClick, className } = this.props;
    const wrapCls = classNames({
      [prefixCls]: true,
      [className]: !!className,
    });

    let operationDom;
    switch (mode) {
      case 'closable':
        operationDom = (
          <div className={`${prefixCls}-operation`} onClick={() => this.onClick()}>
            <Icon type="cross" />
          </div>
        );
        break;
      case 'link':
        operationDom = (
          <div className={`${prefixCls}-operation`} onClick={onClick}>
            <Icon type="right" />
          </div>
        );
        break;
      default:
        operationDom = null;
        break;
    }

    let iconType = '';
    switch (type) {
      case 'success':
        iconType = 'check-circle';
        break;
      case 'error':
        iconType = 'cross-circle';
        break;
      case 'warn':
        iconType = 'exclamation-circle';
        break;
      case 'question':
        iconType = 'question-circle';
        break;
      case 'info':
      default:
        iconType = 'info-circle';
        break;
    }

    const iconDom = type ? <div className={`${prefixCls}-icon`}>
      <Icon type={iconType} />
    </div> : null;

    return this.state.show ? (
      <div {...getDataAttr(this.props)} className={wrapCls}>
        {iconDom}
        <div className={`${prefixCls}-content`}>{children}</div>
        {operationDom}
      </div>
    ) : null;
  }
}
