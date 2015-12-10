import React, {PropTypes} from 'react';
function noop() {}

const TextareaItem = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    clear: PropTypes.bool,
    didMount: PropTypes.func,
    willUnmount: PropTypes.func,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    extraFormData: PropTypes.object
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      label: '',
      name: '',
      defaultValue: '',
      placeholder: '',
      clear: false,
      onChange: noop,
      onInput: noop,
      onBlur: noop,
      onFocus: noop,
      didMount: noop,
      willUnmount:noop,
      extraFormData: {}
    };
  },
  getInitialState() {
    return {
      value: this.props.defaultValue,
      extraFormData: this.props.extraFormData
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
      this.set({
        value: nextProps.value
      });
    }
  },
  _onChange(e) {
    const value = e.target.value;
    this.setValue(value, e);
  },
  _onBlur(e) {
    this.props.onBlur.call(this, e);
  },
  _onFocus(e) {
    this.props.onFocus.call(this, e);
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
    const extraFormData = this.state.extraFormData;
    const extraFormDataArray = [];
    for (const key in extraFormData) {
      extraFormDataArray.push((<input type="hidden" key={key} name={key} value={extraFormData[key]}/>));
    }
    let labelDom = '';
    if (this.props.label) {
      labelDom = (<div className={prefixCls + '-list-label'}>{this.props.label}</div>);
    }

    let clearDom = '';
    const clearClass = this.props.clear ? prefixCls + '-list-item ' + prefixCls + '-input-autoclear am-list-item-form' : prefixCls + '-list-item';
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

    return (
      <div className={clearClass} onClick={this._handleClick}>
        {labelDom}
        <div className={prefixCls + '-list-control'}>
          <textarea name={this.props.name}
            rows="1"
            placeholder={this.props.placeholder}
            onChange={this._onChange}
            onInput={this._onInput}
            onBlur={this._onBlur}
            onFocus={this._onFocus}
            value={this.state.value}
          />
        </div>
        {clearDom}
        {extraFormDataArray}
      </div>
    );
  }
});
module.exports = TextareaItem;
