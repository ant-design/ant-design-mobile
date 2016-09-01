import * as React from 'react';
import classNames from 'classnames';
import { SearchBarProps, SearchBarState, propTypes, defaultProps } from './SearchBarPropTypes';

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);
    let value;
    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    } else {
      value = '';
    }
    this.state = { value };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  onChange = (e) => {
    const value = e.target.value;
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    this.props.onChange(value);
  };

  onCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel(this.state.value);
    } else {
      this.onClear();
    }
  };

  onClear = () => {
    if (!('value' in this.props)) {
      this.setState({ value: '' });
    }
    (this.refs as any).searchInput.focus();
    this.props.onClear('');
    this.props.onChange('');
  };

  render() {
    const {
      prefixCls, showCancelButton, disabled, placeholder,
      cancelText, className, onFocus, onBlur,
    } = this.props;

    const { value } = this.state;

    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className]: className,
    });

    const inputCls = classNames({
      [`${prefixCls}-input`]: true,
      [`${prefixCls}-start`]: value.length > 0,
    });

    let cancelStyle = value && value.length > 0 ? { display: 'block' } : { display: 'none' };

    return (
      <form onSubmit={this.onSubmit}>
        <div className={wrapCls}>
          <div className={inputCls}>
            <input type="search"
              className={`${prefixCls}-value`}
              value={value}
              disabled={disabled}
              placeholder={placeholder}
              onChange={this.onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              ref="searchInput" />
            <a onClick={this.onClear} className={`${prefixCls}-clear`} />
          </div>
          <div
            className={`${prefixCls}-cancel`}
            style={showCancelButton ? { display: 'block' } : cancelStyle}
            onClick={this.onCancel}
          >
            {cancelText}
          </div>
        </div>
      </form>
    );
  }
}
