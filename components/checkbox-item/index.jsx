import React, {PropTypes} from 'react';
function noop() {}

const InputItem = React.createClass({
  propTypes: {
    label         : PropTypes.string,
    name          : PropTypes.string,
    defaultValue  : PropTypes.bool,
    didMount      : PropTypes.func,
    willUnmount   : PropTypes.func,
    onChange      : PropTypes.func,
    extraFormData : PropTypes.object
  },
  getDefaultProps() {
    return {
      label: '',
      name: '',
      defaultValue: '',
      onChange:noop,
      didMount:noop,
      extraFormData:noop
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
  setValue(value, e) {
    if (!('value' in this.props)) {
      this.setState({
        value,
      });
    }
    this.props.onChange.call(this, e);
  },

  _handleChange(e){
    const checked = e.target.checked;
    this.setValue(checked, e);
  },

  render(){
    let inputProp = {};
    if(this.state.value){
      inputProp.checked = 'checked';
    }

    return (
      <div className="am-list-item" data-mode="check">
        <div className="am-list-content">{this.props.label}</div>
        <div className="am-checkbox">
          <input type="checkbox" name={this.props.name} onChange={this._handleChange} {...inputProp}/>
          <span className="icon-check"></span>
        </div>
      </div>
    );

    // const extraFormData = this.state.extraFormData;
    // const extraFormDataArray = [];
    // for (const key in extraFormData) {
    //   extraFormDataArray.push((<input type="hidden" key={key} name={key} value={extraFormData[key]}/>));
    // }
    // let labelDom = '';
    // if (this.props.label) {
    //   labelDom = (<div className="am-list-label">{this.props.label}</div>);
    // }

    // let clearDom = '';
    // const clearClass = this.props.clear ? 'am-list-item am-input-autoclear' : 'am-list-item';
    // if (!!this.props.clear) {
    //   if (this.state.value.length > 0) {
    //     clearDom = (<div className="am-list-clear"><i className="am-icon am-icon-clear" style={{visibility: 'visible'}}
    //                                                   data-am-mode="clear" onClick={this._clearInput}
    //                                                   onTouchStart={this._clearInput}></i></div>);
    //   } else {
    //     clearDom = (<div className="am-list-clear"><i className="am-icon am-icon-clear" data-am-mode="clear"
    //                                                   onClick={this._clearInput} onTouchStart={this._clearInput}></i>
    //     </div>);
    //   }
    // }

    // let iconDom;
    // let iconType = '';
    // if (this.props.icon) {
    //   iconType = 'form-' + this.props.icon;
    //   iconDom = (<div className="am-list-thumb"><i className="am-icon" data-am-mode={iconType} onClick={this._onIconClick}></i></div>);
    // }
    // return (
    //   <div className={clearClass} onClick={this._handleClick}>
    //     {labelDom}
    //     <div className="am-list-control">
    //       <input type="text"
    //              name={this.props.name}
    //              value={this.state.value}
    //              onChange={this._onInputChange}
    //              onBlur={this._onInputBlur}
    //              onFocus={this._onInputFocus}/>
    //       {extraFormDataArray}
    //     </div>
    //     {clearDom}
    //     {iconDom}
    //   </div>
    // );
  }
});
module.exports = InputItem;
