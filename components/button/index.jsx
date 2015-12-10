import React, {PropTypes} from 'react';
function noop() {}

const Button = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    label         : PropTypes.string,
    type          : PropTypes.string,
    mode          : PropTypes.string,
    defaultDisabled: PropTypes.bool,
    didMount      : PropTypes.func,
    willUnmount   : PropTypes.func,
    onClick       : PropTypes.func,
    extraFormData : PropTypes.object
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      label: '',
      type: 'button',
      mode: 'blue',
      defaultDisabled: false,
      onClick:noop,
      didMount:noop,
      willUnmount:noop,
      extraFormData:{}
    };
  },
  getInitialState() {
    return {
      label:this.props.label,
      extraFormData:this.props.extraFormData
    };
  },
  componentDidMount() {
    this.props.didMount(this);
  },
  componentWillUnmount(){
    this.props.willUnmount(this);
  },

  _handleClick(e){
    this.props.onClick(this);
  },

  render(){
    let {prefixCls, mode, type, defaultDisabled} = this.props;
    let modeClass = prefixCls + '-button-' + mode;
    if(mode === 'warn') {
      modeClass = modeClass + ' ' + prefixCls + '-button-flat';
    }

    let allClass = prefixCls + '-button ' + modeClass;
    if(defaultDisabled === true) {
      allClass = allClass + ' ' + prefixCls + '-button-disabled';
    }

    if(type === 'link') {
      return (<a className={allClass} disabled={defaultDisabled} onClick={this._handleClick}>{this.state.label}</a>);
    } else {
      return (<button type="button" className={allClass} disabled={defaultDisabled} onClick={this._handleClick}>{this.state.label}</button>);
    }
  }
});
module.exports = Button;
