import React from 'react';
import classnames from 'classnames';
import { SearchBarProps, SearchBarState, defaultProps } from './PropsType';
import getDataAttr from '../_util/getDataAttr';
import TouchFeedback from 'rmc-feedback';

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  static defaultProps = defaultProps;
  rightBtnInitMarginleft: any;
  firstFocus: any;
  scrollIntoViewTimeout: any;
  blurFromOnClear: any;
  onBlurTimeout: any;
  inputRef: any;
  private rightBtnRef: any;
  private syntheticPhContainerRef: any;
  private syntheticPhRef: any;
  private inputContainerRef: any;

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
  }

  componentDidMount() {
    const initBtn = window.getComputedStyle(this.rightBtnRef);
    this.rightBtnInitMarginleft = initBtn['margin-left'];
    if ((this.props.autoFocus || this.state.focused) && navigator.userAgent.indexOf('AlipayClient') > 0) {
      this.inputRef.focus();
    }
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    // 检测是否包含名为 ${this.props.prefixCls}-start 样式，生成动画
    // offsetWidth 某些时候是向上取整，某些时候是向下取整，不能用
    const realWidth = this.syntheticPhContainerRef.getBoundingClientRect().width; // 包含小数
    if (this.inputContainerRef.className.indexOf(`${this.props.prefixCls}-start`) > -1) {
      this.syntheticPhRef.style.width = `${Math.ceil(realWidth)}px`;
      if (!this.props.showCancelButton) {
        this.rightBtnRef.style.marginRight = 0;
      }
    } else {
      this.syntheticPhRef.style.width = '100%';
      if (!this.props.showCancelButton) {
        this.rightBtnRef.style.marginRight =
          `-${this.rightBtnRef.offsetWidth + parseInt(this.rightBtnInitMarginleft, 10)}px`;
      }
    }
    if (this.state.focused) {
      this.inputRef.focus();
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
    this.inputRef.blur();
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
    this.firstFocus = true;

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
    this.onBlurTimeout = setTimeout(() => {
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
    this.doClear();
  }
  doClear = (blurFromOnClear = true) => {
    this.blurFromOnClear = blurFromOnClear;

    if (!('value' in this.props)) {
      this.setState({ value: '' });
    }
    if (this.props.onClear) {
      this.props.onClear('');
    }
    if (this.props.onChange) {
      this.props.onChange('');
    }
    if (blurFromOnClear) {
      this.inputRef.focus();
    }
  }

  onCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel(this.state.value);
    } else {
      this.doClear(false);
    }
  }

  render() {
    const {
      prefixCls, showCancelButton, disabled, placeholder,
      cancelText, className, style, maxLength,
    } = this.props;

    const { value, focus } = this.state;

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-start`]: focus || value && value.length > 0,
    });

    const clearCls = classnames(`${prefixCls}-clear`, {
      [`${prefixCls}-clear-show`]: focus && value && value.length > 0,
    });

    const cancelCls = classnames(`${prefixCls}-cancel`, {
      [`${prefixCls}-cancel-show`]: showCancelButton || focus || value && value.length > 0,
      [`${prefixCls}-cancel-anim`]: this.firstFocus,
    });

    return (
      <form
        onSubmit={this.onSubmit}
        className={wrapCls}
        style={style}
        ref={el => this.inputContainerRef = el}
        action="#"
      >
        <div className={`${prefixCls}-input`}>
          <div className={`${prefixCls}-synthetic-ph`} ref={el => this.syntheticPhRef = el}>
            <span className={`${prefixCls}-synthetic-ph-container`} ref={el => this.syntheticPhContainerRef = el}>
              <i className={`${prefixCls}-synthetic-ph-icon`}/>
              <span
                className={`${prefixCls}-synthetic-ph-placeholder`}
                style={{ visibility: placeholder && !value ? 'visible' : 'hidden' }}
              >
                {placeholder}
              </span>
            </span>
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
            ref={el => this.inputRef = el}
            maxLength={maxLength}
            {...getDataAttr(this.props)}
          />
          <TouchFeedback activeClassName={`${prefixCls}-clear-active`}>
            <a onClick={this.onClear} className={clearCls} />
          </TouchFeedback>
        </div>
        <div className={cancelCls} onClick={this.onCancel} ref={el => this.rightBtnRef = el}>
          {cancelText}
        </div>
      </form>
    );
  }
}
