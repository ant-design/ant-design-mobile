/* tslint:disable:no-switch-case-fall-through */
import { PropTypes } from 'react';
import * as React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import TopNoticeProps from './topNoticePropsType';

export default class TopNotice extends React.Component<TopNoticeProps, any> {
  static propTypes = {
    mode: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string
  };

  static defaultProps = {
    prefixCls: 'am-top-notice',
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
      [className]: !!className
    });

    let operationDom;
    switch (mode) {
      case 'closable':
        operationDom = (
          <div className="am-top-notice-operation" onClick={() => this.onClick()}>
            <Icon type="cross" />
          </div>
        );
        break;
      case 'link':
        operationDom = (
          <div className="am-top-notice-operation" onClick={onClick}>
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

    const iconDom = type ? <div className="am-top-notice-icon">
      <Icon type={iconType} />
    </div> : null;

    return this.state.show ? (
      <div className={wrapCls}>
        {iconDom}
        <div className="am-top-notice-content">{children}</div>
        {operationDom}
      </div>
    ) : null;
  }
}

