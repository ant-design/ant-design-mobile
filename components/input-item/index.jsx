import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../list/style';
import './index.less';
function noop() {}

const InputItem = React.createClass({
  propTypes: {
    style: PropTypes.object,
    type: PropTypes.bool,
    size: PropTypes.string,
    labelPosition: PropTypes.string,
    textAlign: PropTypes.string,
    editable: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    clear: PropTypes.bool,
    maxLength: PropTypes.number,
    icon: PropTypes.string,
    onIconClick: PropTypes.func,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    error: PropTypes.bool,
    extra: PropTypes.string,
  },
  getDefaultProps() {
    return {
      name: '',
      value: '',
      placeholder: '',
      editable: true,
      icon: '',
      onChange: noop,
      onBlur: noop,
      onFocus: noop,
      onIconClick: noop,
      error: false,
      extra: ''
    };
  },
  getInitialState() {
    return {
      focus: false,
    };
  },
  _onInputChange(e) {
    let value = e.target.value;
    const { maxLength, onChange } = this.props;
    if (maxLength > 0) {
      value = value.substring(0, maxLength);
    }
    onChange(value);
  },
  _onInputBlur(e) {
    setTimeout(() => {
      this.setState({
        focus: false
      });
    }, 300);
    const value = e.target.value;
    this.props.onBlur(value);
  },
  _onInputFocus(e) {
    this.setState({
      focus: true
    });
    const value = e.target.value;
    this.props.onFocus(value);
  },
  _onIconClick() {
    this.props.onIconClick();
  },
  _clearInput() {
    this.props.onChange('');
  },

  render() {
    const { name, editable, value, placeholder, style, clear, children, icon, error, className, extra } = this.props;
    const { focus } = this.state;
    const wrapCls = classNames({
      'am-list-item': true,
      'am-input-autoclear': clear,
      'am-list-item-error': error,
      'am-list-item-focus': focus,
      [className]: className
    });

    let labelDom = '';
    if (children) {
      labelDom = (<div className="am-list-label">{children}</div>);
    }

    let clearDom = '';
    if (clear) {
      if (value.length > 0) {
        clearDom = (<div className="am-list-clear">
          <i className="am-icon am-icon-clear" style={{visibility: 'inherit'}}
            onClick={this._clearInput}
            onTouchStart={this._clearInput} />
        </div>);
      } else {
        clearDom = (<div className="am-list-clear">
          <i className="am-icon am-icon-clear"
            onClick={this._clearInput}
            onTouchStart={this._clearInput} />
        </div>);
      }
    }

    let iconDom;
    let iconType = '';
    if (icon) {
      iconType = `form-${icon}`;
      iconDom = (<div className="am-list-thumb">
        <i className={`am-icon am-icon-${iconType}`} onClick={this._onIconClick} />
      </div>);
    }

    let extraDom = extra !== '' ? (
      <div className="am-list-extra am-input-extra">{extra}</div>
    ) : null;

    return (
      <div className={wrapCls} style={style}>
        {labelDom}
        <div className="am-list-control">
          <input
            type="text"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={this._onInputChange}
            onBlur={this._onInputBlur}
            onFocus={this._onInputFocus}
            readOnly={!editable} />
        </div>
        {clearDom}
        {iconDom}
        {extraDom}
      </div>
    );
  }
});
module.exports = InputItem;
