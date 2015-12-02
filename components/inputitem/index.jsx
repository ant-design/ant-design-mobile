import React from 'react';
const {PropTypes} = React;
const InputItem = React.createClass({
  propTypes: {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    placeholder: PropTypes.string,
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
    this.props.onChange.call(this,e);
  },
  render: function(){
    var extraFormData = this.state.extraFormData;
    var extraFormDataArray = [];
    for(var key in extraFormData) {
      extraFormDataArray.push((<input type="hidden" key={key} name={key} value={extraFormData[key]}/>));
    }
    return (
      <div className="am-list-item" onClick={this._handleClick}>
        <div className="am-list-label">{this.state.label}</div>
        <div className="am-list-control">
          <input type="text"
             name={this.state.name}
             placeholder={this.state.placeholder}
             value={this.state.value}
             onChange={this._onInputChange}/>
          {extraFormDataArray}
        </div>
        <div className="am-list-clear"><i className="am-icon am-icon-clear" data-am-mode="clear"></i></div>
        <div className="am-list-thumb"><i className="am-icon" data-am-mode="form-camera"></i></div>
      </div>
    );
  }
});
module.exports = InputItem;

