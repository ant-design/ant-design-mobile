import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './index.less';
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
    this.props.onChange(e.target.checked);
  },

  render(){
    const { style, mode, name, checked, disabled, extra, children, className } = this.props;

    const wrapCls = classNames({
      'am-list-item': mode !== 'agree',
      'am-list-item-check': mode !== 'agree',

      'am-checkbox': mode === 'agree',
      'am-checkbox-mini': mode === 'agree',
      'am-checkbox-radio': mode === 'agree',
      [className] : className
    });

    let inputProp = {};
    if(checked){
      inputProp.checked = 'checked';
    }

    let extraDom = extra ? <div className="am-list-extra">{extra}</div> : null;

    let renderDom = '';
    if(mode === 'agree') {
      renderDom = (<div>
        <div className={wrapCls} style={style}>
          <input type="checkbox" id={'agree' + name} {...(disabled ? {disabled:'disabled'} : '') } name={name} onChange={this._handleChange} {...inputProp}/>
          <span className="icon-check icon-check-right"/>
          <label className="am-ft-md" htmlFor={'agree' + name}>{children}</label>
        </div>
      </div>);
    } else {
      renderDom = (<div className={wrapCls} style={style}>
        <div className="am-list-content">{children}</div>
        {extraDom}
        <div className="am-checkbox am-checkbox-mini">
          <input type="checkbox" {...(disabled ? {disabled:'disabled'} : '') } name={name} onChange={this._handleChange} {...inputProp}/>
          <span className="icon-check"/>
        </div>
      </div>);
    }
    return renderDom;
  }
});
module.exports = CheckboxItem;
