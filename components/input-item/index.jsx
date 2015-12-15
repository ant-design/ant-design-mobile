import React, {PropTypes} from 'react';
function noop() {}

const InputItem = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    clear: PropTypes.bool,
    icon: PropTypes.string,
    onIconClick: PropTypes.func,
    didMount: PropTypes.func,
    willUnmount: PropTypes.func,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      label: '',
      name: '',
      defaultValue: '',
      placeholder: '',
      icon: '',
      onChange: noop,
      onBlur: noop,
      onFocus: noop,
      didMount: noop,
      willUnmount:noop,
      onIconClick: noop
    };
  },
  getInitialState() {
    return {
      value: this.props.value || this.props.defaultValue
    };
  },
  componentDidMount() {
    this.props.didMount(this);
  },
  componentWillUnmount(){
    this.props.willUnmount(this);
  },
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  },
  _onInputChange(e) {
    const value = e.target.value;
    this.setValue(value, e);
  },
  _onInputBlur(e) {
    this.props.onBlur.call(this, e);
  },
  _onInputFocus(e) {
    this.props.onFocus.call(this, e);
  },
  _onIconClick(e) {
    this.props.onIconClick.call(this, e);
  },
  setValue(value, e) {
    if (!('value' in this.props)) {
      this.setState({
        value,
      });
    }
    this.props.onChange.call(this, e);
  },
  _clearInput() {
    this.setValue('');
  },

  render(){
    let {prefixCls} = this.props;
    let labelDom = '';
    if (this.props.label) {
      labelDom = (<div className={prefixCls + '-list-label'}>{this.props.label}</div>);
    }

    let clearDom = '';
    const clearClass = this.props.clear ? prefixCls + '-list-item ' + prefixCls + '-input-autoclear' : prefixCls + '-list-item';
    if (!!this.props.clear) {
      if (this.state.value.length > 0) {
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
      <div className={clearClass} onClick={this._handleClick}>
        {labelDom}
        <div className={prefixCls + '-list-control'}>
          <input type="text"
                 name={this.props.name}
                 placeholder={this.props.placeholder}
                 value={this.state.value}
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
