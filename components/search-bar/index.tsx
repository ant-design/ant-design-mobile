import classnames from 'classnames';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import TouchFeedback from 'rmc-feedback';
import getDataAttr from '../_util/getDataAttr';
import { getComponentLocale } from '../_util/getLocale';
import { defaultProps, SearchBarPropsType, SearchBarState } from './PropsType';

function onNextFrame(cb: () => void) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(cb);
  }
  return window.setTimeout(cb, 1);
}
function clearNextFrameAction(nextFrameId: number) {
  if (window.cancelAnimationFrame) {
    window.cancelAnimationFrame(nextFrameId);
  } else {
    window.clearTimeout(nextFrameId);
  }
}

export interface SearchBarProps extends SearchBarPropsType {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default class SearchBar extends React.Component<
  SearchBarProps,
  SearchBarState
> {
  static defaultProps = defaultProps;

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  rightBtnInitMarginleft: string | null;
  firstFocus: boolean;
  blurFromOnClear: boolean;
  onBlurTimeout: number | null;
  inputRef: HTMLInputElement | null;
  private rightBtnRef: HTMLDivElement | null;
  private syntheticPhContainerRef: HTMLSpanElement | null;
  private syntheticPhRef: HTMLDivElement | null;
  private inputContainerRef: HTMLFormElement | null;

  constructor(props: SearchBarProps) {
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

  componentDidMount() {
    if (this.rightBtnRef) {
      const initBtn = window.getComputedStyle(this.rightBtnRef);
      this.rightBtnInitMarginleft = initBtn.marginLeft;
    }
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    if (this.syntheticPhRef) {
      if (
        this.inputContainerRef &&
        this.inputContainerRef.className.indexOf(
          `${this.props.prefixCls}-start`,
        ) > -1
      ) {
        // 检测是否包含名为 ${this.props.prefixCls}-start 样式，生成动画
        // offsetWidth 某些时候是向上取整，某些时候是向下取整，不能用
        if (this.syntheticPhContainerRef) {
          const realWidth = this.syntheticPhContainerRef.getBoundingClientRect()
            .width; // 包含小数
          this.syntheticPhRef.style.width = `${Math.ceil(realWidth)}px`;
        }
        if (!this.props.showCancelButton && this.rightBtnRef) {
          this.rightBtnRef.style.marginRight = '0';
        }
      } else {
        this.syntheticPhRef.style.width = '100%';
        if (!this.props.showCancelButton && this.rightBtnRef) {
          this.rightBtnRef.style.marginRight = `-${this.rightBtnRef
            .offsetWidth +
            (this.rightBtnInitMarginleft != null
              ? parseInt(this.rightBtnInitMarginleft, 10)
              : 0)}px`;
        }
      }
    }
  }

  componentWillReceiveProps(nextProps: SearchBarProps) {
    if ('value' in nextProps && nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  componentWillUnmount() {
    if (this.onBlurTimeout) {
      clearNextFrameAction(this.onBlurTimeout);
      this.onBlurTimeout = null;
    }
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.value || '');
    }
    if (this.inputRef) {
      this.inputRef.blur();
    }
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  onBlur = () => {
    this.onBlurTimeout = onNextFrame(() => {
      if (!this.blurFromOnClear) {
        if (document.activeElement !== this.inputRef) {
          this.setState({
            focus: false,
          });
        }
      }
      this.blurFromOnClear = false;
    });
    if (this.props.onBlur) {
      // fix autoFocus item blur with flash
      setTimeout(() => {
        // fix ios12 wechat browser click failure after input
        if (document.body) {
          document.body.scrollTop = document.body.scrollTop;
        }
      },100);
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
      this.focus();
    }
  }

  onCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel(this.state.value || '');
    } else {
      this.doClear(false);
    }
  }
  focus = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }
  render() {
    const {
      prefixCls,
      showCancelButton,
      disabled,
      placeholder,
      className,
      style,
      maxLength,
    } = this.props;

    // tslint:disable-next-line:variable-name
    const _locale = getComponentLocale(
      this.props,
      this.context,
      'SearchBar',
      () => require('./locale/zh_CN'),
    );
    const { cancelText } = _locale;

    const { value, focus } = this.state;

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-start`]: !!(focus || (value && value.length > 0)),
    });

    const clearCls = classnames(`${prefixCls}-clear`, {
      [`${prefixCls}-clear-show`]: !!(focus && value && value.length > 0),
    });

    const cancelCls = classnames(`${prefixCls}-cancel`, {
      [`${prefixCls}-cancel-show`]: !!(
        showCancelButton ||
        focus ||
        (value && value.length > 0)
      ),
      [`${prefixCls}-cancel-anim`]: this.firstFocus,
    });

    return (
      <form
        onSubmit={this.onSubmit}
        className={wrapCls}
        style={style}
        ref={el => (this.inputContainerRef = el)}
        action="#"
      >
        <div className={`${prefixCls}-input`}>
          <div
            className={`${prefixCls}-synthetic-ph`}
            ref={el => (this.syntheticPhRef = el)}
          >
            <span
              className={`${prefixCls}-synthetic-ph-container`}
              ref={el => (this.syntheticPhContainerRef = el)}
            >
              <i className={`${prefixCls}-synthetic-ph-icon`} />
              <span
                className={`${prefixCls}-synthetic-ph-placeholder`}
                // tslint:disable-next-line:jsx-no-multiline-js
                style={{
                  visibility: placeholder && !value ? 'visible' : 'hidden',
                }}
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
            ref={el => (this.inputRef = el)}
            maxLength={maxLength}
            {...getDataAttr(this.props)}
          />
          <TouchFeedback activeClassName={`${prefixCls}-clear-active`}>
            <a onClick={this.onClear} className={clearCls} />
          </TouchFeedback>
        </div>
        <div
          className={cancelCls}
          onClick={this.onCancel}
          ref={el => (this.rightBtnRef = el)}
        >
          {this.props.cancelText || cancelText}
        </div>
      </form>
    );
  }
}
