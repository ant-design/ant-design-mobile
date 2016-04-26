import React, { PropTypes } from 'react';
import classNames from 'classnames';
function noop() {}

const CaptchaItem = React.createClass({
  propTypes: {
    mode: PropTypes.string,
    status: PropTypes.string,
    value: PropTypes.string,
    onSend: PropTypes.func,
    onChange: PropTypes.func,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    clear: PropTypes.bool,
    seconds: PropTypes.number,
    tpl: PropTypes.string,
  },
  getDefaultProps() {
    return {
      mode: 'sms',
      value: '',
      error: false,
      onChange: noop,
      placeholder: '',
      clear: true,
      seconds: 60,
      tpl: '秒后重发',
    };
  },
  getInitialState() {
    return {
      seconds: this.props.seconds
    };
  },
  _clearInput() {
    this.props.onChange('');
  },
  _onInputChange(e) {
    let value = e.target.value;
    const { maxLength, onChange } = this.props;
    if (maxLength > 0) {
      value = value.substring(0, maxLength);
    }
    onChange(value);
  },
  reSend() {
    this.props.onSend();
    this.setState({
      seconds: this.props.seconds
    });
  },
  render() {
    const { mode, status, onSend, value, children, placeholder, clear, tpl, pic, error, className } = this.props;
    const { seconds } = this.state;
    const wrapCls = classNames({
      'am-list-item': true,
      'am-input-autoclear': clear,
      'am-list-item-error': error,
      [className]: className
    });

    let labelDom = children ? (<div className="am-list-label">{children}</div>) : null;

    let clearDom = '';
    if (clear) {
      if (value.length > 0) {
        clearDom = (<div className="am-list-clear">
          <i className="am-icon am-icon-clear" style={{ visibility: 'visible' }}
            onClick={this._clearInput}
            onTouchStart={this._clearInput} />
        </div>);
      } else {
        clearDom = (<div className="am-list-clear">
          <i className="am-icon am-icon-clear" />
        </div>);
      }
    }
    let operateDom = '';
    if (mode === 'sms') {
      if (status === 'initial') {
        operateDom = (<div className="am-list-button">
          <button onClick={onSend}>发送校验码</button>
        </div>);
      } else if (status === 'sending') {
        operateDom = (<div className="am-list-button">
          <button disabled>发送中</button>
        </div>);
      } else if (status === 'sent') {
        setTimeout(() => {
          if (seconds > 0) {
            this.setState({
              seconds: seconds - 1
            });
          }
        }, 1000);
        if (seconds > 0) {
          operateDom = (<div className="am-list-button">
            <button disabled>{seconds + tpl}</button>
          </div>);
        } else {
          operateDom = (<div className="am-list-button">
            <button onClick={this.reSend}>重发校验码</button>
          </div>);
        }
      }
    } else if (mode === 'figure') {
      if (status === 'initial') {
        operateDom = (<div className="am-list-button">
          <div className="am-captcha-figure"><img src={pic} /></div>
          <a onClick={onSend} className="am-captcha-refresh am-icon" />
        </div>);
      } else if (status === 'sending') {
        operateDom = (<div className="am-list-button">
          <div className="am-captcha-figure"><button disabled="disabled">加载中</button></div>
          <a className="am-captcha-refresh am-icon" />
        </div>);
      } else if (status === 'sent') {
        operateDom = (<div className="am-list-button">
          <div className="am-captcha-figure"><img src={pic} /></div>
          <a onClick={onSend} className="am-captcha-refresh am-icon" />
        </div>);
      }
    }

    return (
      <div className={wrapCls}>
        {labelDom}
        <div className="am-list-control">
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={this._onInputChange}
          />
        </div>
        {clearDom}
        {operateDom}
      </div>
    );
  }
});

module.exports = CaptchaItem;
