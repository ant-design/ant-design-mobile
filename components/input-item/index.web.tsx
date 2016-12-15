import React from 'react';
import classNames from 'classnames';
import InputItemProps from './PropsType';
import omit from 'omit.js';

function noop() {}

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

export interface InputItemState {
  focus?: boolean;
  placeholder?: string;
}

class InputItem extends React.Component<InputItemProps, InputItemState> {
  static defaultProps = {
    prefixCls: 'am-input',
    prefixListCls: 'am-list',
    type: 'text',
    editable: true,
    disabled: false,
    placeholder: '',
    clear: false,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    extra: '',
    onExtraClick: noop,
    error: false,
    onErrorClick: noop,
    labelNumber: 4,
    updatePlaceholder: false,
    focus: false,
  };

  debounceTimeout: any;

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      placeholder: this.props.placeholder,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('placeholder' in nextProps && this.state.placeholder !== nextProps.placeholder) {
      this.setState({
        placeholder: nextProps.placeholder,
      });
    }

    if (nextProps.focus) {
      this.refs['input'].focus();
    }
  }

  componentWillUnmount() {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.refs['input'].focus();
    }
  }

  onInputChange = (e) => {
    let value = e.target.value;
    const { onChange, type } = this.props;

    switch (type) {
      case 'text':
        break;
      case 'bankCard':
        value = value.replace(/\D/g, '');
        value = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
        break;
      case 'phone':
        value = value.replace(/\D/g, '').substring(0, 11);
        const valueLen = value.length;
        if (valueLen > 3 && valueLen < 8) {
          value = `${value.substr(0, 3)} ${value.substr(3)}`;
        } else if (valueLen >= 8) {
          value = `${value.substr(0, 3)} ${value.substr(3, 4)} ${value.substr(7)}`;
        }
        break;
      case 'number':
        value = value.replace(/\D/g, '');
        break;
      case 'password':
        break;
      default:
        break;
    }
    if (onChange) {
      onChange(value);
    }
  }

  onInputBlur = (e) => {
    this.debounceTimeout = setTimeout(() => {
      this.setState({
        focus: false,
      });
    }, 300);
    const value = e.target.value;
    if (this.props.onBlur) {
      this.props.onBlur(value);
    }
  }

  onInputFocus = (e) => {
    this.setState({
      focus: true,
    });
    const value = e.target.value;
    if (this.props.onFocus) {
      this.props.onFocus(value);
    }
  }

  onExtraClick = (e) => {
    if (this.props.onExtraClick) {
      this.props.onExtraClick(e);
    }
  }

  onErrorClick = (e) => {
    if (this.props.onErrorClick) {
      this.props.onErrorClick(e);
    }
  }

  clearInput = () => {
    if (this.props.type !== 'password' && this.props.updatePlaceholder) {
      this.setState({
        placeholder: this.props.value,
      });
    }
    if (this.props.onChange) {
      this.props.onChange('');
    }
  }

  render() {
    const {
      prefixCls, prefixListCls, type, value, defaultValue,
      name, editable, disabled, style, clear, children,
      error, className, extra, labelNumber, maxLength,
    } = this.props;

    const otherProps = omit(this.props, ['prefixCls', 'prefixListCls', 'editable', 'style', 'focus',
      'clear', 'children', 'error', 'className', 'extra', 'labelNumber', 'onExtraClick', 'onErrorClick',
      'updatePlaceholder',
    ]);

    const { focus, placeholder } = this.state;
    const wrapCls = classNames({
      [`${prefixListCls}-item`]: true,
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-disabled`]: disabled,
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

    let inputType: any = 'text';
    if (type === 'bankCard' || type === 'phone') {
      inputType = 'tel';
    } else if (type === 'password') {
      inputType = 'password';
    } else if (type !== 'text') {
      inputType = type;
    }

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

    let patternProps;
    if (type === 'number') {
      patternProps = {
        pattern: '[0-9]*',
      };
    }

    return (
      <div className={wrapCls} style={style}>
        {children ? (<div className={labelCls}>{children}</div>) : null}
        <div className={`${prefixCls}-control`}>
          <input
            ref="input"
            {...patternProps}
            {...otherProps}
            {...valueProps}
            type={inputType}
            maxLength={maxLength}
            name={name}
            placeholder={placeholder}
            onChange={this.onInputChange}
            onBlur={this.onInputBlur}
            onFocus={this.onInputFocus}
            readOnly={!editable}
            disabled={disabled}
          />
        </div>
        {clear && editable && !disabled && (value && value.length > 0) ?
          <div className={`${prefixCls}-clear`} onClick={this.clearInput} />
          : null}
        {error ? (<div className={`${prefixCls}-error-extra`} onClick={this.onErrorClick} />) : null}
        {extra !== '' ? <div className={`${prefixCls}-extra`} onClick={this.onExtraClick}>{extra}</div> : null}
      </div>
    );
  }
}

export default InputItem;
