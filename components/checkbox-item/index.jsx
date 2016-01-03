import React, {PropTypes} from 'react';
function noop() {}

const CheckboxItem = React.createClass({
  propTypes: {
    prefixCls     : PropTypes.string,
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
      prefixCls: 'am',
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
    const { prefixCls, style, mode, name, checked, disabled } = this.props;

    let inputProp = {};
    if(checked){
      inputProp.checked = 'checked';
    }

    let extraDom = '';
    if(this.props.extra) {
      extraDom = <div className={prefixCls + '-list-extra'}>{this.props.extra}</div>;
    }


    let renderDom = '';
    if(mode === 'agree') {
      renderDom = (<div>
        <div className={ prefixCls + '-checkbox ' + prefixCls + '-checkbox-mini ' + prefixCls + '-checkbox-radio' } style={style}>
          <input type="checkbox" id={'agree' + name} {...(disabled ? {disabled:'disabled'} : '') } name={name} onChange={this._handleChange} {...inputProp}/>
          <span className="icon-check icon-check-right"></span>
          <label className="am-ft-md" htmlFor={'agree' + name}>{this.props.children}</label>
        </div>
      </div>);
    } else {
      renderDom = (<div className={prefixCls + '-list-item ' + prefixCls + '-list-item-check'} style={style}>
        <div className={prefixCls + '-list-content'}>{this.props.children}</div>
        {extraDom}
        <div className={prefixCls + '-checkbox ' + prefixCls + '-checkbox-mini'}>
          <input type="checkbox" {...(disabled ? {disabled:'disabled'} : '') } name={name} onChange={this._handleChange} {...inputProp}/>
          <span className="icon-check"></span>
        </div>
      </div>);
    }
    return renderDom;
  }
});
module.exports = CheckboxItem;
