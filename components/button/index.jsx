import React, {PropTypes} from 'react';
import classNames from 'classnames';
import './button.less';
function noop() {}

const Button = React.createClass({
  propTypes: {
    mode          : PropTypes.string,
    size          : PropTypes.string,
    inline        : PropTypes.bool,
    disabled      : PropTypes.bool,
    onClick       : PropTypes.func,
  },
  getDefaultProps() {
    return {
      mode: 'blue',
      size: 'large',
      inline: false,
      disabled: false,
      onClick:noop,
    };
  },
  _handleClick(e){
    this.props.onClick(this);
  },

  render(){
    let { mode, size, inline, disabled, className, ...others } = this.props;
    const wrapCls = classNames({
      'am-button': true,
      'am-button-blue' : mode === 'blue',
      'am-button-white' : mode === 'white',
      'am-button-red' : mode === 'red',
      'am-button-light' : mode === 'light',
      'am-button-warn' : mode === 'warn',

      'am-button-flat' : mode === 'warn',

      'am-button-large' : size === 'large',
      'am-button-middle' : size === 'middle',
      'am-button-small' : size === 'small',
      'am-button-little' : size === 'little',
      'am-button-tiny' : size === 'tiny',

      'am-button-inline' : inline,
      'am-button-disabled' : disabled,

      [className] : className
    });

    return (<button {...others} className={wrapCls} disabled={disabled} onClick={this._handleClick}>{this.props.children}</button>);
  }
});
module.exports = Button;
