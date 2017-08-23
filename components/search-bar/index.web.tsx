import React from 'react';
import classNames from 'classnames';
import { SearchBarProps, SearchBarState, defaultProps } from './PropsType';
import getDataAttr from '../_util/getDataAttr';

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  static defaultProps = defaultProps;
  refs: any;
  scrollIntoViewTimeout: any;
  onBlurTimeout: any;
  blurFromOnClear: boolean;

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
      focused: props.focused || false,
    };
    this.blurFromOnClear = false;
  }

  componentDidMount() {
    if (this.props.autoFocus && navigator.userAgent.indexOf('AlipayClient') > 0) {
      (this.refs as any).searchInput.focus();
    }
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    if (this.state.focused) {
      (this.refs as any).searchInput.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
    if ('focused' in nextProps) {
      this.setState({
        focused: nextProps.focused,
      });
    }
  }

  componentWillUnmount() {
    if (this.scrollIntoViewTimeout) {
      clearTimeout(this.scrollIntoViewTimeout);
      this.scrollIntoViewTimeout = null;
    }
    if (this.onBlurTimeout) {
      clearTimeout(this.onBlurTimeout);
      this.onBlurTimeout = null;
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.value);
    }
    (this.refs as any).searchInput.blur();
  }

  onChange = (e) => {
    if (!this.state.focus) {
      this.setState({
        focus: true,
      });
    }
    const value = e.target.value;
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  onFocus = () => {
    this.setState({
      focus: true,
    });
    if (!('focused' in this.props)) {
      this.setState({
        focused: true,
      });
    }

    if (this.props.onFocus) {
      this.props.onFocus();
    }

    if (document.activeElement.tagName.toLowerCase() === 'input') {
      this.scrollIntoViewTimeout = setTimeout(() => {
        try {
          (document.activeElement as any).scrollIntoViewIfNeeded();
        } catch (e) { }
      }, 100);
    }
  }

  onBlur = () => {
    setTimeout(() => {
      if (!this.blurFromOnClear) {
        this.setState({
          focus: false,
        });
      }
      this.blurFromOnClear = false;
    }, 50);
    if (!('focused' in this.props)) {
      this.setState({
        focused: false,
      });
    }
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  onClear = () => {
    this.blurFromOnClear = true;

    if (!('value' in this.props)) {
      this.setState({ value: '' });
    }
    if (this.props.onClear) {
      this.props.onClear('');
    }
    if (this.props.onChange) {
      this.props.onChange('');
    }
    // 加上setTimeout 为了解决Android的兼容性问题。
    // https://github.com/ant-design/ant-design-mobile/issues/1341
    (this.refs as any).searchInput.focus();
  }

  onCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel(this.state.value);
    } else {
      this.onClear();
    }
  }

  render() {
    const {
      prefixCls, showCancelButton, disabled, placeholder,
      cancelText, className, style, maxLength,
    } = this.props;

    const { value, focus } = this.state;

    const wrapCls = classNames({
      [`${prefixCls}`]: true,
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
      <form onSubmit={this.onSubmit} className={wrapCls} style={style} action="#">
        <div className={`${prefixCls}-input`}>
          <div className={`${prefixCls}-synthetic-ph`}>
            <i className={`${prefixCls}-synthetic-ph-icon`}/>
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
            maxLength={maxLength}
            {...getDataAttr(this.props)}
          />
          <a onClick={this.onClear} className={clearCls} />
        </div>
        <div className={cancelCls} onClick={this.onCancel}>
          {cancelText}
        </div>
      </form>
    );
  }
}
