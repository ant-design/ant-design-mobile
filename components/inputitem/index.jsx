import React from 'react';
import ReactDOM from 'react-dom';
const {PropTypes} = React;
const InputItem = React.createClass({
  propTypes: {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    clear: PropTypes.bool,
    icon: PropTypes.any,
    didMount: PropTypes.func,
    onChange: PropTypes.func,
    extraFormData: PropTypes.object
  },
  getInitialState: function() {
    return {
      label:this.props.label||'',
      name:this.props.name||'',
      value:this.props.value||'',
      placeholder:this.props.placeholder||'',
      icon:this.props.icon||'',
      extraFormData: this.props.extraFormData||{}
    };
  },
  componentDidMount: function() {
    if(!!this.props.didMount) {
      this.props.didMount(this);
    }
  },
  _onInputChange:function(e) {
    this.setState({
      value: e.target.value
    });
    if(!!this.props.clear) {
      ReactDOM.findDOMNode(this).querySelector('.am-icon-clear').style.visibility = this.state.value.length>0?"visible":"hidden";
    }
    this.props.onChange.call(this,e);
  },
  _clearInput:function() {
    this.setState({
      value: ''
    });
    /*clearTrigger.addEventListener('touchstart', function () {
      clearInput.value = '';
      clearInput.focus();
      clearTrigger.style.visibility = 'hidden';
    }, false);
    clearTrigger.addEventListener('click', function () {
      clearInput.value = '';
      clearInput.focus();
      clearTrigger.style.visibility = 'hidden';
    }, false);
    clearInput.addEventListener('focus', function () {
      clearTrigger.style.visibility = (clearInput.value.length > 0) ? 'visible' : 'hidden';
    }, false);
    clearInput.addEventListener('input', function () {
      clearTrigger.style.visibility = (clearInput.value.length > 0) ? 'visible' : 'hidden';
    }, false);
    clearInput.addEventListener('blur', function () {
      setTimeout(function(){
        clearTrigger.style.visibility = 'hidden';
      },20);
    }, false);*/
  },

  render: function(){
    var extraFormData = this.state.extraFormData;
    var extraFormDataArray = [];
    for(var key in extraFormData) {
      extraFormDataArray.push((<input type="hidden" key={key} name={key} value={extraFormData[key]}/>));
    }
    var labelDom = '';
    if(this.state.label) {
      labelDom = (<div className="am-list-label">{this.state.label}</div>);
    }

    var clearDom = '',
    clearClass = this.props.clear?"am-list-item am-input-autoclear":"am-list-item";
    if(!!this.props.clear) {
      if(this.state.value.length>0) {
        clearDom = (<div className="am-list-clear"><i className="am-icon am-icon-clear" style={{visibility:"visible"}} data-am-mode="clear" onClick={this._clearInput}  onTouchStart={this._clearInput}></i></div>);
      } else {
        clearDom = (<div className="am-list-clear"><i className="am-icon am-icon-clear" data-am-mode="clear" onClick={this._clearInput}  onTouchStart={this._clearInput}></i></div>);
      }
    }

    var iconDom,
      iconType="";
    if(this.state.icon) {
      iconType = "form-"+this.state.icon;
      iconDom = (<div className="am-list-thumb"><i className="am-icon" data-am-mode={iconType}></i></div>);
    }
    return (
      <div className={clearClass} onClick={this._handleClick}>
        {labelDom}
        <div className="am-list-control">
          <input type="text"
             name={this.state.name}
             placeholder={this.state.placeholder}
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

