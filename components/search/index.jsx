import React, {PropTypes} from 'react';
function noop() {}

const Search = React.createClass({
  propTypes: {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    onCancel: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    showCancelButton: PropTypes.bool,
    disablSearch: PropTypes.bool,
  },
  getDefaultProps() {
    return {
      value: '',
      placeholder: '',
      onSubmit: noop,
      onChange: noop,
      onCancel: noop,
      onFocus: noop,
      onBlur: noop,
      showCancelButton: false,
      disablSearch: false,
    };
  },
  getInitialState(){
    return {
      value :this.props.value
    };
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
    let cancelStyle = {};
    let cancelDom = null;
    if(this.state.value.length > 0) {
      inputClass = 'am-search-input';
      cancelStyle = {'display':'block'};
    } else {
      inputClass = 'am-search-input am-search-start';
      cancelStyle = {'display':'none'};
    }

    if(this.props.showCancelButton) {
      cancelDom = (<div className="am-search-button" style={{display: 'block'}}>
        <button type="button" onClick={this._handleCancel}>取消</button>
      </div>);
    } else {
      cancelDom = (<div className="am-search-button" style={cancelStyle}>
        <button type="button" disabled={this.state.value.length === 0} onClick={this._handleCancel}>取消</button>
      </div>);
    }
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="am-search">
          <div className={inputClass}>
            <div className="am-search-icon"><i className="am-icon am-icon-search"/></div>
            <input type="search" disabled={this.props.disablSearch} placeholder={this.props.placeholder} className="am-search-value" onChange={this._handleChange} onFocus={this.props.onFocus} onBlur={this.props.onBlur} value={this.state.value}/>
          </div>
          {cancelDom}
        </div>
      </form>
    );
  }
});
module.exports = Search;
