import React, {PropTypes} from 'react';
function noop() {}

const CheckboxItem = React.createClass({
  propTypes: {
    name          : PropTypes.string,
    checked       : PropTypes.bool,
    disabled      : PropTypes.bool,
    onChange      : PropTypes.func
  },
  getDefaultProps() {
    return {
      name: '',
      checked: false,
      disabled: false,
      onChange:noop
    };
  },
  _handleChange(e){
    this.props.onChange.call(this, e.target.checked);
  },

  render(){
    let inputProp = {};
    if(this.props.checked){
      inputProp.checked = 'checked';
    }

    return (
      <div className="am-list-item am-list-item-check">
        <div className="am-list-content">{this.props.children}</div>
        <div className="am-checkbox am-checkbox-mini">
          <input type="checkbox" {...(this.props.disabled ? {disabled:'disabled'} : '') } name={this.props.name} onChange={this._handleChange} {...inputProp}/>
          <span className="icon-check"></span>
        </div>
      </div>
    );
  }
});
module.exports = CheckboxItem;
