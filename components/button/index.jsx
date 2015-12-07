import React, {PropTypes} from 'react';
function noop() {}

const Button = React.createClass({
  propTypes: {
    label         : PropTypes.string,
    type          : PropTypes.string,
    didMount      : PropTypes.func,
    disabled      : PropTypes.bool,
    willUnmount   : PropTypes.func,
    onClick       : PropTypes.func,
    extraFormData : PropTypes.object
  },
  getDefaultProps() {
    return {
      label: '',
      type: 'button',
      onClick:noop,
      didMount:noop,
      willUnmount:noop,
      extraFormData:{}
    };
  },
  getInitialState() {
    return {
      extraFormData:this.props.extraFormData
    };
  },
  componentDidMount() {
    this.props.didMount(this);
  },
  componentWillUnmount(){
    this.props.willUnmount(this);
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
      <div className="am-list-item" data-mode="check">
        <div className="am-list-content">{this.props.label}</div>
        <div className="am-checkbox">
          <input type="checkbox" name={this.props.name} onClick={this._handleClick} {...inputProp}/>
          <span className="icon-check"></span>
        </div>
      </div>
    );
  }
});
module.exports = Button;
