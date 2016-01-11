import React, {PropTypes} from 'react';
function noop() {}

const InputItem = React.createClass({
  propTypes: {
    style: PropTypes.object,
    mode: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    clear: PropTypes.bool,
    icon: PropTypes.string,
    onIconClick: PropTypes.func,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    error: PropTypes.bool,
  },
  getDefaultProps() {
    return {
      mode: 'text',
      name: '',
      value: '',
      placeholder: '',
      icon: '',
      onChange: noop,
      onBlur: noop,
      onFocus: noop,
      onIconClick: noop,
      error: false,
    };
  },
  _onInputChange(e) {
    this.props.onChange.call(this, e.target.value);
  },
  _onInputBlur(e) {
    this.props.onBlur.call(this);
  },
  _onInputFocus(e) {
    this.props.onFocus.call(this);
  },
  _onIconClick() {
    this.props.onIconClick.call(this);
  },
  _clearInput() {
    this.props.onChange.call(this, '');
  },

  render(){
    const { mode, name, value, placeholder, style, clear, children, icon, error } = this.props;
    let labelDom = '';
    if (children) {
      labelDom = (<div className="am-list-label">{children}</div>);
    }
    let clearClass = clear ? 'am-list-item am-input-autoclear ' : 'am-list-item ';

    clearClass = clearClass + (error ? 'am-list-item-error' : '');

    if(mode === 'label') {
      return (
        <div className={clearClass} style={style}>
          {labelDom}
          <div className="am-list-control">
            <label>{value}</label>
          </div>
        </div>
      );
    } else {
      let clearDom = '';
      if (!!clear) {
        if (value.length > 0) {
          clearDom = (<div className="am-list-clear">
            <i className="am-icon am-icon-clear" style={{visibility: 'visible'}}
            onClick={this._clearInput}
            onTouchStart={this._clearInput}/>
          </div>);
        } else {
          clearDom = (<div className="am-list-clear">
            <i className="am-icon amicon-clear"
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
    }
  }
});
module.exports = InputItem;
