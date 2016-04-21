import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './index.less';
function noop() {}

const SearchBar = React.createClass({
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
  getInitialState() {
    return {
      value: this.props.value
    };
  },
  _handleChange(e) {
    let value = e.target.value;
    this.setState({value});
    this.props.onChange(value);
  },
  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  },
  _handleCancel() {
    this.setState({value: ''});
    this.props.onChange('');
    this.props.onCancel('');
  },
  render() {
    const { className, showCancelButton, disablSearch, placeholder } = this.props;
    const { value } = this.state;

    const wrapCls = classNames({
      'am-search': true,
      [className]: className
    });
    const inputClass = classNames({
      'am-search-input': true,
      'am-search-start': value.length > 0
    });

    let cancelStyle = value.length > 0 ? {'display': 'block'} : {'display': 'none'};
    let cancelDom = showCancelButton ? (<div className="am-search-button" style={{display: 'block'}}>
        <button type="button" onClick={this._handleCancel}>取消</button>
      </div>) : (<div className="am-search-button" style={cancelStyle}>
        <button type="button" disabled={value.length === 0} onClick={this._handleCancel}>取消</button>
      </div>);

    return (
      <form onSubmit={this._handleSubmit}>
        <div className={wrapCls}>
          <div className={inputClass}>
            <div className="am-search-icon"><i className="am-icon am-icon-search" /></div>
            <input type="search" disabled={disablSearch} placeholder={placeholder} className="am-search-value" onChange={this._handleChange} onFocus={this.props.onFocus} onBlur={this.props.onBlur} value={value} />
          </div>
          {cancelDom}
        </div>
      </form>
    );
  }
});
module.exports = SearchBar;
