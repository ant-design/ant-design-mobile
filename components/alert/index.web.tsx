/* tslint:disable:no-switch-case-fall-through */
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../icon';

export default class Alert extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'success',
      'info',
      'error',
      'warn',
      'wait',
      'question',
    ]),
    message: PropTypes.string,
    description: PropTypes.string,
    brief: PropTypes.string,
    result: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'am-alert',
    type: 'info',
    result: false,
  };

  render() {
    let { description, type, prefixCls, message, brief, result } = this.props;

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
      case 'wait':
        iconType = 'clock-circle';
        break;
      case 'question':
        iconType = 'question-circle';
        break;
      case 'info':
      default:
        iconType = 'info-circle';
        break;
    }

    let alertCls = classNames({
      [prefixCls]: true,
      [`${prefixCls}-result`]: result,
      [`${prefixCls}-message`]: !result,
      [`${prefixCls}-${type}`]: true,
    });

    return (
      <div className={alertCls}>
        <div className={`${prefixCls}-icon`}>
          <Icon type={iconType} />
        </div>
        <div className={`${prefixCls}-main`}>{message}</div>
        <div className={`${prefixCls}-description`}>{description}</div>
        {result ? <div className={`${prefixCls}-brief`}>{brief}</div> : null}
      </div>
    );
  }
}
