import React from 'react';
import classNames from 'classnames';
import { SearchBarProps, SearchBarState, defaultProps } from './PropsType';

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);
    let value;
    if ('value' in props) {
      value = props.value || '';
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    } else {
      value = '';
    }
    this.state = {
      value,
      focus: false,
    };
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
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.value);
    }
  };

  onChange = (e) => {
    const value = e.target.value;
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  onFocus = () => {
    this.setState({
      focus: true,
    });

    if (this.props.onFocus) {
      this.props.onFocus();
    }
  };

  onBlur = () => {
    this.setState({
      focus: false,
    });

    if (this.props.onBlur) {
      this.props.onBlur();
    }
  };

  onClear = () => {
    if (!('value' in this.props)) {
      this.setState({ value: '' });
    }
    (this.refs as any).searchInput.focus();
    if (this.props.onClear) {
      this.props.onClear('');
    }
    if (this.props.onChange) {
      this.props.onChange('');
    }
  };

  onCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel(this.state.value);
    } else {
      this.onClear();
    }
    (this.refs as any).searchInput.blur();
  };

  render() {
    const {
      prefixCls, showCancelButton, disabled, placeholder,
      cancelText, className,
    } = this.props;

    const { value, focus } = this.state;

    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-start`]: focus || value && value.length > 0,
      [className as string]: className,
    });

    const clearCls = classNames({
      [`${prefixCls}-clear`]: true,
      [`${prefixCls}-clear-show`]: focus && value && value.length > 0,
    });

    const cancelCls = classNames({
      [`${prefixCls}-cancel`]: true,
      [`${prefixCls}-cancel-show`]: showCancelButton || focus || value && value.length > 0,
    });

    return (
      <form onSubmit={this.onSubmit} className={wrapCls} ref="searchInputContainer">
        <div className={`${prefixCls}-input`}>
          <div className={`${prefixCls}-icon`}>
            <i className={`${prefixCls}-icon-search`}></i>
            <span className={`${prefixCls}-ph`}>{placeholder}</span>
          </div>
          <input
            type="search"
            className={`${prefixCls}-value`}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            ref="searchInput"
          />
          <a onClick={this.onClear} className={clearCls} />
        </div>
        <div
          className={cancelCls}
          onClick={this.onCancel}
        >
          {cancelText}
        </div>
      </form>
    );
  }
}
