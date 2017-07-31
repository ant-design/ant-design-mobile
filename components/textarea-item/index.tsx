/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import classNames from 'classnames';
import TextareaItemProps from './PropsType';
import omit from 'omit.js';

function noop() {}

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

const regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

function countSymbols(text = '') {
  return text.replace(regexAstralSymbols, '_').length;
}

export interface TextareaItemState {
  focus?: boolean;
  focused?: boolean;
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

  debounceTimeout: any;
  scrollIntoViewTimeout: any;

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      focused: props.focused || false,
    };
  }

  componentDidMount() {
    this.componentDidUpdate();
    if ((this.props.autoFocus || this.state.focused) && navigator.userAgent.indexOf('AlipayClient') > 0) {
      (this.refs as any).textarea.focus();
    }
  }

  componentDidUpdate() {
    if (this.props.autoHeight) {
      const textareaDom = (this.refs as any).textarea;
      textareaDom.style.height = ''; // 字数减少时能自动减小高度
      textareaDom.style.height = `${textareaDom.scrollHeight}px`;
    }
    if (this.state.focused) {
      (this.refs as any).textarea.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('focused' in nextProps) {
      this.setState({
        focused: nextProps.focused,
      });
    }
  }

  componentWillUnmount() {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }

    if (this.scrollIntoViewTimeout) {
      clearTimeout(this.scrollIntoViewTimeout);
      this.scrollIntoViewTimeout = null;
    }
  }

  onChange = (e) => {
    let value = e.target.value;
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
    // 设置 defaultValue 时，用户输入不会触发 componentDidUpdate ，此处手工调用
    this.componentDidUpdate();
  }

  onBlur = (e) => {
    this.debounceTimeout = setTimeout(() => {
      this.setState({
        focus: false,
      });
    }, 100);
    if (!('focused' in this.props)) {
      this.setState({
        focused: false,
      });
    }
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
    if (!('focused' in this.props)) {
      this.setState({
        focused: true,
      });
    }

    this.setState({
      focus: true,
    });
    const value = e.target.value;
    if (this.props.onFocus) {
      this.props.onFocus(value);
    }

    if (document.activeElement.tagName.toLowerCase() === 'textarea') {
      this.scrollIntoViewTimeout = setTimeout(() => {
        try {
          (document.activeElement as any).scrollIntoViewIfNeeded();
        } catch (e) { }
      }, 100);
    }
  }

  onErrorClick = () => {
    if (this.props.onErrorClick) {
      this.props.onErrorClick();
    }
  }

  clearInput = () => {
    if (this.props.onChange) {
      this.props.onChange('');
    }
  }

  render() {
    let {
      prefixCls, prefixListCls, style, title, value, defaultValue, clear,
      editable, disabled, error, className, labelNumber, autoHeight,
    } = this.props;
    const count = this.props.count as number;
    const rows = this.props.rows as number;
    // note: remove `placeholderTextColor` prop for rn TextInput supports placeholderTextColor
    const otherProps = omit(this.props, ['prefixCls', 'prefixListCls', 'editable', 'style',
      'clear', 'children', 'error', 'className', 'count', 'labelNumber', 'title', 'onErrorClick',
      'autoHeight', 'autoFocus', 'focused', 'placeholderTextColor',
    ]);

    let valueProps;
    if ('value' in this.props) {
      valueProps = {
        value: fixControlledValue(value),
      };
    } else {
      valueProps = {
        defaultValue,
      };
    }

    const { focus } = this.state;
    const wrapCls = classNames({
      [`${prefixListCls}-item`]: true,
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-item-single-line`]: rows === 1 && !autoHeight,
      [`${prefixCls}-error`]: error,
      [`${prefixCls}-focus`]: focus,
      [className as string]: className,
    });

    const labelCls = classNames({
      [`${prefixCls}-label`]: true,
      [`${prefixCls}-label-2`]: labelNumber === 2,
      [`${prefixCls}-label-3`]: labelNumber === 3,
      [`${prefixCls}-label-4`]: labelNumber === 4,
      [`${prefixCls}-label-5`]: labelNumber === 5,
      [`${prefixCls}-label-6`]: labelNumber === 6,
      [`${prefixCls}-label-7`]: labelNumber === 7,
    });
    const characterLength = countSymbols(value);
    return (
      <div className={wrapCls}>
        {title && <div className={labelCls}>{title}</div>}
        <div className={`${prefixCls}-control`}>
          <textarea
            ref="textarea"
            maxLength={count}
            {...otherProps}
            {...valueProps}
            onChange={this.onChange}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            readOnly={!editable}
            style={style}
          />
        </div>
        {clear && editable && value && characterLength > 0 &&
          <div className={`${prefixCls}-clear`} onClick={this.clearInput} onTouchStart={this.clearInput} />
        }
        {error && <div className={`${prefixCls}-error-extra`} onClick={this.onErrorClick} />}
        {count > 0 && rows > 1 &&
          <span className={`${prefixCls}-count`}><span>{value ? characterLength : 0}</span>/{count}</span>
        }
      </div>
    );
  }
}
