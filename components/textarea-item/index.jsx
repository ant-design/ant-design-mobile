import React, {PropTypes} from 'react';
function noop() {}

const strNumStyle = {position: 'absolute', bottom: '8px', right: '15px', color: '#ccc', fontSize:'13px'};

const TextareaItem = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    clear: PropTypes.bool,
    rows: PropTypes.number,
    maxLength: PropTypes.number,
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
      maxLength: 0,
      onChange: noop,
      onBlur: noop,
      onFocus: noop,
    };
  },
  _onChange(e) {
    let value = e.target.value;
    const { maxLength, onChange } = this.props;
    if(maxLength > 0) {
      value = value.substring(0, maxLength);
    }
    onChange.call(this, value);
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
    let {prefixCls, label, name, value, placeholder, clear, rows, maxLength } = this.props;
    let labelDom = '';
    let textareaStyle = {marginTop: '4px'};
    let alignSelfStyle = {alignSelf: 'stretch'};
    if (label) {
      if(rows === 1) {
        labelDom = (<div className={prefixCls + '-list-label'}>{label}</div>);
      } else {
        labelDom = (<div className={prefixCls + '-list-label'} style={rows > 1 ? alignSelfStyle : {}}>{label}</div>);
      }
    }

    let clearDom = '';
    const clearClass = clear ? prefixCls + '-list-item ' + prefixCls + '-input-autoclear ' + prefixCls + '-list-item-form' : prefixCls + '-list-item';
    if (clear) {
      if (value.length > 0) {
        clearDom = (<div className={prefixCls + '-list-clear'} style={rows > 1 ? alignSelfStyle : {}}><i className={prefixCls + '-icon ' + prefixCls + '-icon-clear'} style={{visibility: 'visible'}}
          onClick={this._clearInput}
          onTouchStart={this._clearInput}></i></div>);
      } else {
        clearDom = (<div className={prefixCls + '-list-clear'}><i className={prefixCls + '-icon ' + prefixCls + '-icon-clear'}
          onClick={this._clearInput}
          onTouchStart={this._clearInput}></i>
        </div>);
      }
    }

    let strNumDom = '';
    if (maxLength > 0) {
      strNumDom = <span style={strNumStyle}>{maxLength - value.length}</span>;
    }

    return (
      <div className={clearClass} onClick={this._handleClick}>
        {labelDom}
        <div className={prefixCls + '-list-control'}>
          <textarea name={name}
            rows={rows}
            placeholder={placeholder}
            onChange={this._onChange}
            onBlur={this._onBlur}
            onFocus={this._onFocus}
            value={value}
            style={rows > 1 ? textareaStyle : {}}
          />
        </div>
        {clearDom}
        {strNumDom}
      </div>
    );
  }
});
module.exports = TextareaItem;
