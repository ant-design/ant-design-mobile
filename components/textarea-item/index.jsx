import React, { PropTypes } from 'react';
import classNames from 'classnames';
function noop() {}

const strNumStyle = { position: 'absolute', bottom: '8px', right: '15px', color: '#ccc', fontSize: '13px' };

export default class TextareaItem extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    prefixInputCls: PropTypes.string,
    prefixListCls: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(['hasLine', 'hasBorder']),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    clear: PropTypes.bool,
    rows: PropTypes.number,
    count: PropTypes.number,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    error: PropTypes.bool,
    autoHeight: PropTypes.bool,
    editable: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'am-textarea',
    prefixInputCls: 'am-input',
    prefixListCls: 'am-list',
    title: '',
    type: 'hasLine',
    autoHeight: false,
    editable: true,
    name: '',
    value: '',
    placeholder: '',
    clear: false,
    rows: 1,
    count: 0,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    error: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }

  componentDidMount = () => {
    if (this.props.autoHeight) {
      this.initialTextHeight = this.refs.textarea.offsetHeight;
      this.componentDidUpdate();
    }
  };
  componentDidUpdate = () => {
    if (this.props.autoHeight) {
      let textareaDom = this.refs.textarea;
      textareaDom.style.height = '';
      textareaDom.style.height = `${Math.max(this.initialTextHeight, textareaDom.scrollHeight + 2)}px`;
    }
  };
  _onChange = (e) => {
    let value = e.target.value;
    const { count, onChange } = this.props;
    if (count > 0) {
      value = value.substring(0, count);
    }
    onChange(value);
  };
  _onBlur = (e) => {
    setTimeout(() => {
      this.setState({
        focus: false
      });
    }, 500);
    const value = e.target.value;
    this.props.onBlur(value);
  };
  _onFocus = (e) => {
    this.setState({
      focus: true
    });
    const value = e.target.value;
    this.props.onFocus(value);
  };
  _clearInput = () => {
    this.props.onChange('');
  };
  render() {
    let { prefixCls, title, name, value, placeholder, clear, rows, count, editable, error, className } = this.props;
    const { focus } = this.state;
    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      'am-list-item': true,
      'am-input-autoclear': clear,
      'am-list-item-error': error,
      'am-list-item-focus': focus,
      [className]: className
    });

    let textareaStyle = { marginTop: '4px' };
    let alignSelfStyle = { alignSelf: 'stretch' };
    let titleDom = title ? (<div className="am-list-label" style={rows > 1 ? alignSelfStyle : {}}>{title}</div>) : null;

    let clearDom = '';
    if (clear && editable) {
      if (value.length > 0) {
        clearDom = (<div className="am-list-clear" style={rows > 1 ? alignSelfStyle : {}}><i className="am-icon am-icon-clear" style={{ visibility: 'inherit' }}
          onClick={this._clearInput}
          onTouchStart={this._clearInput} /></div>);
      } else {
        clearDom = (<div className="am-list-clear"><i className="am-icon am-icon-clear"
          onClick={this._clearInput}
          onTouchStart={this._clearInput} />
        </div>);
      }
    }

    let strNumDom = '';
    if (count > 0 && rows > 1) {
      strNumDom = <span style={strNumStyle}><span style={{ color: '#000' }}>{count - value.length}</span>/{count}</span>;
    }

    return (
      <div className={wrapCls} onClick={this._handleClick}>
        {titleDom}
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
}
