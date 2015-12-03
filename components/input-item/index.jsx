import React, {PropTypes} from 'react';
const InputItem = React.createClass({
  propTypes: {
    label: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.any,
    placeholder: PropTypes.string,
    clear: PropTypes.bool,
    icon: PropTypes.any,
    didMount: PropTypes.func,
    onChange: PropTypes.func,
    extraFormData: PropTypes.object
  },
  getDefaultProps() {
    return {
      label: '',
      name: '',
      defaultValue: '',
      placeholder: '',
      icon: '',
      onChange(){
      },
      didMount(){
      },
      extraFormData: {}
    };
  },
  getInitialState() {
    return {
      value:this.props.defaultValue,
      extraFormData:this.props.extraFormData
    };
  },
  componentDidMount() {
    this.props.didMount(this);
  },
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.set({
        value: nextProps.value
      });
    }
  },
  _onInputChange(e) {
    const value = e.target.value;
    this.setValue(value);
  },
  setValue(value) {
    if (!('value' in this.props)) {
      this.setState({
        value,
      });
    }
    this.props.onChange(value);
  },

  _clearInput() {
    this.setValue('');
  },

  render(){
    const extraFormData = this.state.extraFormData;
    const extraFormDataArray = [];
    for (const key in extraFormData) {
      extraFormDataArray.push((<input type="hidden" key={key} name={key} value={extraFormData[key]}/>));
    }
    let labelDom = '';
    if (this.props.label) {
      labelDom = (<div className="am-list-label">{this.props.label}</div>);
    }

    let clearDom = '';
    const clearClass = this.props.clear ? 'am-list-item am-input-autoclear' : 'am-list-item';
    if (!!this.props.clear) {
      if (this.state.value.length > 0) {
        clearDom = (<div className="am-list-clear"><i className="am-icon am-icon-clear" style={{visibility: 'visible'}}
                                                      data-am-mode="clear" onClick={this._clearInput}
                                                      onTouchStart={this._clearInput}></i></div>);
      } else {
        clearDom = (<div className="am-list-clear"><i className="am-icon am-icon-clear" data-am-mode="clear"
                                                      onClick={this._clearInput} onTouchStart={this._clearInput}></i>
        </div>);
      }
    }

    let iconDom;
    let iconType = '';
    if (this.props.icon) {
      iconType = 'form-' + this.props.icon;
      iconDom = (<div className="am-list-thumb"><i className="am-icon" data-am-mode={iconType}></i></div>);
    }
    return (
      <div className={clearClass} onClick={this._handleClick}>
        {labelDom}
        <div className="am-list-control">
          <input type="text"
                 name={this.props.name}
                 placeholder={this.props.placeholder}
                 value={this.state.value}
                 onChange={this._onInputChange}/>
          {extraFormDataArray}
        </div>
        {clearDom}
        {iconDom}
      </div>
    );
  }
});
module.exports = InputItem;
