import React, {PropTypes} from 'react';
function noop() {}

const CheckboxItem = React.createClass({
  propTypes: {
    style         : PropTypes.object,
    mode          : PropTypes.string,
    name          : PropTypes.string,
    checked       : PropTypes.bool,
    disabled      : PropTypes.bool,
    onChange      : PropTypes.func,
    extra         : PropTypes.any,
  },
  getDefaultProps() {
    return {
      mode: 'mini',
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
    const { style, mode, name, checked, disabled } = this.props;

    let inputProp = {};
    if(checked){
      inputProp.checked = 'checked';
    }

    let extraDom = '';
    if(this.props.extra) {
      extraDom = <div className="am-list-extra">{this.props.extra}</div>;
    }


    let renderDom = '';
    if(mode === 'agree') {
      renderDom = (<div>
        <div className="am-checkbox am-checkbox-mini am-checkbox-radio" style={style}>
          <input type="checkbox" id={'agree' + name} {...(disabled ? {disabled:'disabled'} : '') } name={name} onChange={this._handleChange} {...inputProp}/>
          <span className="icon-check icon-check-right"></span>
          <label className="am-ft-md" htmlFor={'agree' + name}>{this.props.children}</label>
        </div>
      </div>);
    } else {
      renderDom = (<div className="am-list-item am-list-item-check" style={style}>
        <div className="am-list-content">{this.props.children}</div>
        {extraDom}
        <div className="am-checkbox am-checkbox-mini">
          <input type="checkbox" {...(disabled ? {disabled:'disabled'} : '') } name={name} onChange={this._handleChange} {...inputProp}/>
          <span className="icon-check"></span>
        </div>
      </div>);
    }
    return renderDom;
  }
});
module.exports = CheckboxItem;
