/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import classnames from 'classnames';
import BasePropsType from './PropsType';
import TouchFeedback from 'rmc-feedback';

export interface TextareaItemProps extends BasePropsType {
  prefixCls?: string;
  prefixListCls?: string;
  className?: string;
  onClick?: Function;
}

function noop() { }

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

const regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g;

function countSymbols(text = '') {
  return text.replace(regexAstralSymbols, '_').length;
}

export interface TextareaItemState {
  focus?: boolean;
  value?: string;
}

export default class TextareaItem extends React.Component<TextareaItemProps, TextareaItemState> {
  static defaultProps = {
    prefixCls: 'am-textarea',
    prefixListCls: 'am-list',
    autoHeight: false,
    editable: true,
    disabled: false,
    placeholder: '',
    clear: false,
    rows: 1,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    onErrorClick: noop,
    error: false,
    labelNumber: 5,
  };

  textareaRef: any;

  private debounceTimeout: any;

  constructor(props: TextareaItemProps) {
    super(props);

    this.state = {
      focus: false,
      value: props.value || props.defaultValue || '',
    };
  }

  focus = () => {
    this.textareaRef.focus();
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: fixControlledValue(nextProps.value),
      });
    }
  }

  componentDidMount() {
    if (this.props.autoHeight) {
      this.reAlignHeight();
    }
  }
  componentDidUpdate() {
    if (this.props.autoHeight && this.state.focus) {
      this.reAlignHeight();
    }
  }
  reAlignHeight = () => {
    const textareaDom = this.textareaRef;
    textareaDom.style.height = ''; // 字数减少时能自动减小高度
    textareaDom.style.height = `${textareaDom.scrollHeight}px`;
  }
  componentWillUnmount() {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
  }

  onChange = (e) => {
    let value = e.target.value;

    if ('value' in this.props) {
      this.setState({ value: this.props.value });
    } else {
      this.setState({ value });
    }

    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
    // 设置 defaultValue 时，用户输入不会触发 componentDidUpdate ，此处手工调用
    this.componentDidUpdate();
  }

  onBlur = (e) => {
    this.debounceTimeout = setTimeout(() => {
      if (document.activeElement !== this.textareaRef) {
        this.setState({
          focus: false,
        });
      }
    }, 100);
    this.setState({
      focus: false,
    });
    const value = e.target.value;
    if (this.props.onBlur) {
      this.props.onBlur(value);
    }
  }

  onFocus = (e) => {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
    this.setState({
      focus: true,
    });
    const value = e.target.value;
    if (this.props.onFocus) {
      this.props.onFocus(value);
    }
  }

  onErrorClick = () => {
    if (this.props.onErrorClick) {
      this.props.onErrorClick();
    }
  }

  clearInput = () => {
    this.setState({
      value: '',
    });

    if (this.props.onChange) {
      this.props.onChange('');
    }
  }

  render() {
    const {
      prefixCls, prefixListCls, editable, style,
      clear, children, error, className, count, labelNumber,
      title, onErrorClick, autoHeight, defaultValue, ...otherProps,
    } = this.props;
    const { disabled } = otherProps;
    const { value, focus } = this.state;
    const hasCount = count! > 0 && this.props.rows! > 1;

    const wrapCls = classnames(className, `${prefixListCls}-item`, `${prefixCls}-item`, {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-item-single-line`]: this.props.rows === 1 && !autoHeight,
      [`${prefixCls}-error`]: error,
      [`${prefixCls}-focus`]: focus,
      [`${prefixCls}-has-count`]: hasCount,
    });

    const labelCls = classnames(`${prefixCls}-label`, {
      [`${prefixCls}-label-2`]: labelNumber === 2,
      [`${prefixCls}-label-3`]: labelNumber === 3,
      [`${prefixCls}-label-4`]: labelNumber === 4,
      [`${prefixCls}-label-5`]: labelNumber === 5,
      [`${prefixCls}-label-6`]: labelNumber === 6,
      [`${prefixCls}-label-7`]: labelNumber === 7,
    });
    const characterLength = countSymbols(value);
    const lengthCtrlProps: any = {};
    if (count! > 0) {
      lengthCtrlProps.maxLength = (count! - characterLength) + (value ? value.length : 0);
    }
    return (
      <div className={wrapCls}>
        {title && <div className={labelCls}>{title}</div>}
        <div className={`${prefixCls}-control`}>
          <textarea
            ref={el => this.textareaRef = el}
            {...lengthCtrlProps}
            {...otherProps}
            value={value}
            onChange={this.onChange}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            readOnly={!editable}
            style={style}
          />
        </div>
        {clear && editable && value && characterLength > 0 &&
          <TouchFeedback activeClassName={`${prefixCls}-clear-active`}>
            <div className={`${prefixCls}-clear`} onClick={this.clearInput} onTouchStart={this.clearInput} />
          </TouchFeedback>
        }
        {error && <div className={`${prefixCls}-error-extra`} onClick={this.onErrorClick} />}
        {hasCount &&
          <span className={`${prefixCls}-count`}><span>{value ? characterLength : 0}</span>/{count}</span>
        }
      </div>
    );
  }
}
