import React, {PropTypes} from 'react';
function noop() {}

const CheckItem = React.createClass({
  propTypes: {
    label         : PropTypes.string,
    name          : PropTypes.string,
    defaultValue  : PropTypes.bool,
    willUnmount   : PropTypes.func,
    disabled      : PropTypes.bool,
    onChange      : PropTypes.func
  },
  getDefaultProps() {
    return {
      label: '',
      name: '',
      defaultValue: '',
      onChange:noop
    };
  },
  getInitialState() {
    return {
      value:this.props.defaultValue
    };
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
      <div className="am-list-item am-list-item-check">
        <div className="am-list-content">{this.props.label}</div>
        <div className="am-checkbox">
          <input type="checkbox" {...(this.props.disabled ? {disabled:'disabled'} : '') } name={this.props.name} onChange={this._handleChange} {...inputProp}/>
          <span className="icon-check"></span>
        </div>
      </div>
    );
  }
});
module.exports = CheckItem;
