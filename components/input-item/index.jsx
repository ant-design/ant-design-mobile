import React, {PropTypes} from 'react';
function noop() {}

const InputItem = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
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
    let {prefixCls} = this.props;
    let labelDom = '';
    if (this.props.children) {
      labelDom = (<div className={prefixCls + '-list-label'}>{this.props.children}</div>);
    }

    let clearDom = '';
    const clearClass = this.props.clear ? prefixCls + '-list-item ' + prefixCls + '-input-autoclear' : prefixCls + '-list-item';
    if (!!this.props.clear) {
      if (this.props.value.length > 0) {
        clearDom = (<div className={prefixCls + '-list-clear'}><i className={prefixCls + '-icon ' + prefixCls + '-icon-clear'} style={{visibility: 'visible'}}
                                                      onClick={this._clearInput}
                                                      onTouchStart={this._clearInput}></i></div>);
      } else {
        clearDom = (<div className={prefixCls + '-list-clear'}><i className={prefixCls + '-icon ' + prefixCls + '-icon-clear'}
                                                      onClick={this._clearInput}
                                                      onTouchStart={this._clearInput}></i>
        </div>);
      }
    }

    let iconDom;
    let iconType = '';
    if (this.props.icon) {
      iconType = 'form-' + this.props.icon;
      iconDom = (<div className={prefixCls + '-list-thumb'}><i className={prefixCls + '-icon ' + prefixCls + '-icon-' + iconType} onClick={this._onIconClick}></i></div>);
    }
    return (
      <div className={clearClass} onClick={this._handleClick} style={this.props.style}>
        {labelDom}
        <div className={prefixCls + '-list-control'}>
          <input type="text"
                 name={this.props.name}
                 placeholder={this.props.placeholder}
                 value={this.props.value}
                 onChange={this._onInputChange}
                 onBlur={this._onInputBlur}
                 onFocus={this._onInputFocus}/>
        </div>
        {clearDom}
        {iconDom}
      </div>
    );
  }
});
module.exports = InputItem;
