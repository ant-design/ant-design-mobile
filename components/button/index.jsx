import React, {PropTypes} from 'react';
function noop() {}

const Button = React.createClass({
  propTypes: {
    prefixCls     : PropTypes.string,
    mode          : PropTypes.string,
    size          : PropTypes.string,
    inline        : PropTypes.bool,
    disabled      : PropTypes.bool,
    onClick       : PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
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
    let {prefixCls, mode, size, inline, disabled} = this.props;
    let buttonClass = prefixCls + '-button-' + mode;

    if(mode === 'warn') {
      buttonClass = buttonClass + ' ' + prefixCls + '-button-flat';
    }

    buttonClass += ' ' + prefixCls + '-button-' + size;

    if(inline) {
      buttonClass += ' ' + prefixCls + '-button-inline';
    }

    let allClass = prefixCls + '-button ' + buttonClass;
    if(disabled) {
      allClass = allClass + ' ' + prefixCls + '-button-disabled';
    }

    return (<button type="button" className={allClass} disabled={disabled} onClick={this._handleClick}>{this.props.children}</button>);
  }
});
module.exports = Button;
