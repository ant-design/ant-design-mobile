import React, {PropTypes} from 'react';
function noop() {}

const InputItem = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
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
    onFocus: PropTypes.func
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      mode: 'text',
      name: '',
      value: '',
      placeholder: '',
      icon: '',
      onChange: noop,
      onBlur: noop,
      onFocus: noop,
      onIconClick: noop
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
    const {prefixCls, mode, name, value, placeholder, style, clear, children, icon } = this.props;
    let labelDom = '';
    if (children) {
      labelDom = (<div className={prefixCls + '-list-label'}>{children}</div>);
    }
    const clearClass = clear ? prefixCls + '-list-item ' + prefixCls + '-input-autoclear' : prefixCls + '-list-item';

    if(mode === 'label') {
      return (
        <div className={clearClass} style={style}>
          {labelDom}
          <div className={prefixCls + '-list-control'}>
            <label>{value}</label>
          </div>
        </div>
      );
    } else {
      let clearDom = '';
      if (!!clear) {
        if (value.length > 0) {
          clearDom = (<div className={prefixCls + '-list-clear'}>
            <i className={prefixCls + '-icon ' + prefixCls + '-icon-clear'} style={{visibility: 'visible'}}
            onClick={this._clearInput}
            onTouchStart={this._clearInput}/>
          </div>);
        } else {
          clearDom = (<div className={prefixCls + '-list-clear'}>
            <i className={prefixCls + '-icon ' + prefixCls + '-icon-clear'}
              onClick={this._clearInput}
              onTouchStart={this._clearInput}/>
          </div>);
        }
      }

      let iconDom;
      let iconType = '';
      if (icon) {
        iconType = 'form-' + icon;
        iconDom = (<div className={prefixCls + '-list-thumb'}>
          <i className={prefixCls + '-icon ' + prefixCls + '-icon-' + iconType} onClick={this._onIconClick}/>
        </div>);
      }

      return (
        <div className={clearClass} style={style}>
          {labelDom}
          <div className={prefixCls + '-list-control'}>
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
