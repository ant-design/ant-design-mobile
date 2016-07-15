import * as React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';
function noop() {}

export interface SearchBarProps {
  prefixCls?: string;
  style?: React.CSSProperties;
  value?: string;
  placeholder?: string;
  onSubmit?: Function;
  onChange?: Function;
  onFocus?: Function;
  onBlur?: Function;
  onCancel?: Function;
  onClear?: Function;
  showCancelButton?: boolean;
  cancelTxt?: string;
  disablSearch?: boolean;
}

export interface SearchBarState {
  value?: string;
  focus?: boolean;
}

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onCancel: PropTypes.func,
    onClear: PropTypes.func,
    showCancelButton: PropTypes.bool,
    cancelTxt: PropTypes.string,
    disablSearch: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'am-search',
    value: '',
    placeholder: '',
    onSubmit: noop,
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    onCancel: noop,
    onClear: noop,
    showCancelButton: false,
    cancelTxt: '取消',
    disablSearch: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      focus: false,
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  onChange = (e) => {
    let value = e.target.value;
    this.setState({ value });
    this.props.onChange(value);
  };

  onFocus = (e) => {
    if (this.props.disablSearch) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    let value = e.target.value;
    this.setState({
      focus: true,
    });
    this.props.onFocus(value);
  };

  onBlur = (e) => {
    let value = e.target.value;
    this.setState({
      focus: false,
    });
    this.props.onBlur(value);
  };

  onCancel = () => {
    this.setState({ value: '' });
    this.props.onCancel('');
  };

  onClear = () => {
    this.setState({
      value: ''
    });
    this.refs.searchInput.focus();
    this.props.onClear('');
  };

  render() {
    const { prefixCls, showCancelButton, disablSearch, placeholder, cancelTxt, className } = this.props;
    const { value, focus } = this.state;

    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className]: className
    });

    const inputCls = classNames({
      [`${prefixCls}-input`]: true,
      [`${prefixCls}-input-focus`]: focus,
      [`${prefixCls}-start`]: value.length > 0
    });

    let cancelStyle = value.length > 0 ? { display: 'block' } : { display: 'none' };

    return (
      <form onSubmit={this.onSubmit}>
        <div className={wrapCls}>
          <div className={inputCls}>
            <input type="search"
              className={`${prefixCls}-value`}
              value={value}
              disabled={disablSearch}
              placeholder={placeholder}
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              ref="searchInput" />
            <a onClick={this.onClear} className={`${prefixCls}-clear`} />
          </div>
          <div className={`${prefixCls}-cancel`} style={showCancelButton ? { display: 'block' } : cancelStyle} onClick={this.onCancel}>{cancelTxt}</div>
        </div>
      </form>
    );
  }
}
