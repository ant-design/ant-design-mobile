import React, {PropTypes} from 'react';
import classNames from 'classnames';
function noop() {}

const strNumStyle = {position: 'absolute', bottom: '8px', right: '15px', color: '#ccc', fontSize:'13px'};

const TextareaItem = React.createClass({
  propTypes: {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    clear: PropTypes.bool,
    rows: PropTypes.number,
    maxLength: PropTypes.number,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    error: PropTypes.bool,
    autoHeight: PropTypes.bool,
    editable: PropTypes.bool,
  },
  getDefaultProps() {
    return {
      label: '',
      name: '',
      value: '',
      placeholder: '',
      clear: false,
      rows: 1,
      maxLength: 0,
      onChange: noop,
      onBlur: noop,
      onFocus: noop,
      error: false,
      autoHeight: false,
      editable: true,
    };
  },
  getInitialState() {
    return {
      focus: false,
    };
  },
  componentDidMount() {
    if(this.props.autoHeight) {
      this.initialTextHeight = this.refs.textarea.offsetHeight;
      this.componentDidUpdate();
    }
  },
  componentDidUpdate() {
    if(this.props.autoHeight) {
      let textareaDom = this.refs.textarea;
      textareaDom.style.height = '';
      textareaDom.style.height = Math.max(this.initialTextHeight, textareaDom.scrollHeight + 2) + 'px';
    }
  },
  _onChange(e) {
    let value = e.target.value;
    const { maxLength, onChange } = this.props;
    if(maxLength > 0) {
      value = value.substring(0, maxLength);
    }
    onChange(value);
  },
  _onBlur(e) {
    this.setState({
      focus: false
    });
    const value = e.target.value;
    this.props.onBlur(value);
  },
  _onFocus(e) {
    this.setState({
      focus: true
    });
    const value = e.target.value;
    this.props.onFocus(value);
  },
  _clearInput() {
    this.props.onChange('');
  },

  render(){
    let { label, name, value, placeholder, clear, rows, maxLength, editable, error, className } = this.props;
    const { focus } = this.state;
    const wrapCls = classNames({
      'am-list-item': true,
      'am-list-item-form': clear,
      'am-input-autoclear': clear,
      'am-list-item-error': error,
      'am-list-item-focus': focus,
      [className] : className
    });

    let textareaStyle = {marginTop: '4px'};
    let alignSelfStyle = {alignSelf: 'stretch'};
    let labelDom = label ? (<div className="am-list-label" style={rows > 1 ? alignSelfStyle : {}}>{label}</div>) : null;

    let clearDom = '';
    if (clear && editable) {
      if (value.length > 0 && focus) {
        clearDom = (<div className="am-list-clear" style={rows > 1 ? alignSelfStyle : {}}><i className="am-icon am-icon-clear" style={{visibility: 'inherit'}}
          onClick={this._clearInput}
          onTouchStart={this._clearInput}/></div>);
      } else {
        clearDom = (<div className="am-list-clear"><i className="am-icon am-icon-clear"
          onClick={this._clearInput}
          onTouchStart={this._clearInput}/>
        </div>);
      }
    }

    let strNumDom = '';
    if (maxLength > 0 && rows > 1) {
      strNumDom = <span style={strNumStyle}>{maxLength - value.length}</span>;
    }

    return (
      <div className={wrapCls} onClick={this._handleClick}>
        {labelDom}
        <div className="am-list-control">
          <textarea
            ref="textarea"
            name={name}
            rows={rows}
            placeholder={placeholder}
            onChange={this._onChange}
            onBlur={this._onBlur}
            onFocus={this._onFocus}
            value={value}
            style={rows > 1 ? textareaStyle : {}}
            readOnly={!editable}
          />
        </div>
        {clearDom}
        {strNumDom}
      </div>
    );
  }
});
module.exports = TextareaItem;
