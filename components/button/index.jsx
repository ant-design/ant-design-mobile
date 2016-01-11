import React, {PropTypes} from 'react';
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
    let { mode, size, inline, disabled} = this.props;
    let buttonClass = 'am-button-' + mode;

    if(mode === 'warn') {
      buttonClass = buttonClass + ' am-button-flat';
    }

    buttonClass += ' am-button-' + size;

    if(inline) {
      buttonClass += ' am-button-inline';
    }

    let allClass = 'am-button ' + buttonClass;
    if(disabled) {
      allClass = allClass + ' am-button-disabled';
    }

    return (<button type="button" className={allClass} disabled={disabled} onClick={this._handleClick}>{this.props.children}</button>);
  }
});
module.exports = Button;
