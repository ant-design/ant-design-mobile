import React, {PropTypes} from 'react';
function noop() {}

const TextareaItem = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    clear: PropTypes.bool,
    rows: PropTypes.number,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      label: '',
      name: '',
      value: '',
      placeholder: '',
      clear: false,
      rows: 1,
      onChange: noop,
      onBlur: noop,
      onFocus: noop,
    };
  },
  _onChange(e) {
    const value = e.target.value;
    this.props.onChange.call(this, value);
  },
  _onBlur(e) {
    this.props.onBlur.call(this);
  },
  _onFocus(e) {
    const value = e.target.value;
    this.props.onFocus.call(this, value);
  },
  _clearInput() {
    this.props.onChange.call(this, '');
  },

  render(){
    let {prefixCls} = this.props;
    let labelDom = '';
    if (this.props.label) {
      labelDom = (<div className={prefixCls + '-list-label'}>{this.props.label}</div>);
    }

    let clearDom = '';
    const clearClass = this.props.clear ? prefixCls + '-list-item ' + prefixCls + '-input-autoclear ' + prefixCls + '-list-item-form' : prefixCls + '-list-item';
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

    return (
      <div className={clearClass} onClick={this._handleClick}>
        {labelDom}
        <div className={prefixCls + '-list-control'}>
          <textarea name={this.props.name}
            rows={this.props.rows}
            placeholder={this.props.placeholder}
            onChange={this._onChange}
            onBlur={this._onBlur}
            onFocus={this._onFocus}
            value={this.props.value}
          />
        </div>
        {clearDom}
      </div>
    );
  }
});
module.exports = TextareaItem;
