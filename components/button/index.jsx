import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './index.less';
function noop() {}

const Button = React.createClass({
  propTypes: {
    type          : PropTypes.string,
    size          : PropTypes.string,
    inline        : PropTypes.bool,
    disabled      : PropTypes.bool,
    onClick       : PropTypes.func,
  },
  getDefaultProps() {
    return {
      type: 'primary',
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
    let { type, size, inline, disabled, className, ...others } = this.props;
    const wrapCls = classNames({
      'am-button': true,
      'am-button-primary' : type === 'primary',
      'am-button-secondary' : type === 'secondary',
      'am-button-normal' : type === 'normal',
      'am-button-warning' : type === 'warning',

      'am-button-large' : size === 'large',
      'am-button-small' : size === 'small',

      'am-button-inline' : inline,
      'am-button-disabled' : disabled,
      [className] : className
    });

    return (<button {...others} className={wrapCls} disabled={disabled} onClick={this._handleClick}>{this.props.children}</button>);
  }
});
module.exports = Button;
