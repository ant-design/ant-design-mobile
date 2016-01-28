import React, {PropTypes} from 'react';
function noop() {}

const InputItem = React.createClass({
  propTypes: {
    style: PropTypes.object,
    extraCls: PropTypes.string,
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
    };
  },
  _onInputChange(e) {
    let value = e.target.value;
    const { maxLength, onChange } = this.props;
    if(maxLength > 0) {
      value = value.substring(0, maxLength);
    }
    onChange.call(this, value);
  },
  _onInputBlur(e) {
    const value = e.target.value;
    this.props.onBlur.call(this, value);
  },
  _onInputFocus(e) {
    const value = e.target.value;
    this.props.onFocus.call(this, value);
  },
  _onIconClick() {
    this.props.onIconClick.call(this);
  },
  _clearInput() {
    this.props.onChange.call(this, '');
  },

  render(){
    const { name, editable, value, placeholder, style, clear, children, icon, error } = this.props;
    let labelDom = '';
    if (children) {
      labelDom = (<div className="am-list-label">{children}</div>);
    }
    let clearClass = clear ? 'am-list-item am-input-autoclear ' : 'am-list-item ';

    clearClass = clearClass + (error ? 'am-list-item-error' : '');

    if(editable) {
      let clearDom = '';
      if (clear) {
        if (value.length > 0) {
          clearDom = (<div className="am-list-clear">
            <i className="am-icon am-icon-clear" style={{visibility: 'visible'}}
            onClick={this._clearInput}
            onTouchStart={this._clearInput}/>
          </div>);
        } else {
          clearDom = (<div className="am-list-clear">
            <i className="am-icon am-icon-clear"
              onClick={this._clearInput}
              onTouchStart={this._clearInput}/>
          </div>);
        }
      }

      let iconDom;
      let iconType = '';
      if (icon) {
        iconType = 'form-' + icon;
        iconDom = (<div className="am-list-thumb">
          <i className={'am-icon am-icon-' + iconType} onClick={this._onIconClick}/>
        </div>);
      }

      return (
        <div className={clearClass} style={style}>
          {labelDom}
          <div className="am-list-control">
            <input type="text"
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={this._onInputChange}
              onBlur={this._onInputBlur}
              onFocus={this._onInputFocus}/>
          </div>
          {clearDom}
          {iconDom}
        </div>
      );
    } else {
      return (
        <div className={clearClass} style={style}>
          {labelDom}
          <div className="am-list-control">
            <label>{value}</label>
          </div>
        </div>
      );
    }
  }
});
module.exports = InputItem;
