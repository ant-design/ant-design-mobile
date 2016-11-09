import React from 'react';
import classNames from 'classnames';
import { SearchBarProps, SearchBarState, defaultProps } from './PropsType';

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  static defaultProps = defaultProps;

  initialInputContainerWidth: number;

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

  componentDidMount() {
    if ((/U3/i).test(navigator.userAgent)) {
      this.initialInputContainerWidth = (this.refs as any).searchInputContainer.offsetWidth;
      if (this.props.showCancelButton) {
        (this.refs as any).searchInputContainer.style.width =
          `${(this.refs as any).searchInputContainer.offsetWidth - 41 * (window.devicePixelRatio || 1)}px`;
      }
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
      [`${prefixCls}-start`]: showCancelButton || focus,
      [className as string]: className,
    });

    let containerStyle = {};

    if ((/U3/i).test(navigator.userAgent)) {
      if (this.initialInputContainerWidth) {
        if (showCancelButton || focus) {
          containerStyle = {
            width: `${this.initialInputContainerWidth - 41 * (window.devicePixelRatio || 1)}px`,
          };
        } else {
          containerStyle = {
            width: `${this.initialInputContainerWidth}px`,
          };
        }
      }
    }

    const clearCls = classNames({
      [`${prefixCls}-clear`]: true,
      [`${prefixCls}-clear-show`]: focus && value && value.length > 0,
    });

    const cancelCls = classNames({
      [`${prefixCls}-cancel`]: true,
      [`${prefixCls}-all-cancel`]: showCancelButton,
    });

    return (
      <form onSubmit={this.onSubmit} className={wrapCls}>
        <div
          ref="searchInputContainer"
          className={`${prefixCls}-input`}
          style={containerStyle}
        >
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
