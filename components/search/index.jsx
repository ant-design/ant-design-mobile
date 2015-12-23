import React, {PropTypes} from 'react';
function noop() {}

const Search = React.createClass({
  propTypes: {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    onCancel: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  },
  getDefaultProps() {
    return {
      value: '',
      placeholder: '',
      onSubmit: noop,
      onChange: noop,
      onClear: noop,
      onCancel: noop,
      onFocus: noop,
      onBlur: noop,
    };
  },
  getInitialState(){
    return {
      value :this.props.value
    };
  },
  _handleClearClick() {
    this.setState({value: ''});
    this.props.onChange.call(this, this.state.value);
    this.props.onClear.call(this, this.state.value);
  },
  _handleChange(e) {
    let value = e.target.value;
    this.setState({value: value});
    this.props.onChange.call(this, value);
  },
  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit.call(this, this.state.value);
  },
  _handleCancel() {
    this.setState({value: ''});
    this.props.onChange.call(this, this.state.value);
    this.props.onCancel.call(this, this.state.value);
  },
  render() {
    let inputClass = '';
    let clearStyle = {};
    let cancelStyle = {};
    if(this.state.value.length > 0) {
      inputClass = 'am-search-input';
      clearStyle = {'visibility':'visible'};
      cancelStyle = {'display':'block'};
    } else {
      inputClass = 'am-search-input am-search-start';
      clearStyle = {'visibility':'hidden'};
      cancelStyle = {'display':'none'};
    }
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="am-search am-input-autoclear">
          <div className={inputClass}>
            <div className="am-search-icon"><i className="am-icon am-icon-search"/></div>
            <input type="search" placeholder={this.props.placeholder} className="am-search-value" onChange={this._handleChange} onFocus={this.props.onFocus} onBlur={this.props.onBlur} value={this.state.value}/>
            <div className="am-search-clear" onClick={this._handleClearClick}><i className="am-icon-clear am-icon am-icon-clear-tiny" style={clearStyle}></i></div>
          </div>
          <div className="am-search-button" style={cancelStyle}>
            <button type="button" disabled={this.state.value.length === 0} onClick={this._handleCancel}>取消</button>
          </div>
        </div>
      </form>
    );
  }
});
module.exports = Search;
