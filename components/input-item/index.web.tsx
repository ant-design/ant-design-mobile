/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import classNames from 'classnames';
import omit from 'omit.js';
import InputItemProps from './PropsType';
import Input from './Input.web';

function noop() { }

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

class InputItem extends React.Component<InputItemProps, any> {
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
    labelNumber: 5,
    updatePlaceholder: false,
  };

  debounceTimeout: any;
  scrollIntoViewTimeout: any;

  constructor(props) {
    super(props);
    this.state = {
      placeholder: props.placeholder,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('placeholder' in nextProps && !nextProps.updatePlaceholder) {
      this.setState({
        placeholder: nextProps.placeholder,
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

  onInputChange = (e) => {
    let value = e.target.value;
    const { onChange, type } = this.props;

    switch (type) {
      case 'text':
        break;
      case 'bankCard':
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

  onInputFocus = (value) => {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
    this.setState({
      focus: true,
    });
    if (document.activeElement.tagName.toLowerCase() === 'input') {
      this.scrollIntoViewTimeout = setTimeout(() => {
        try {
          (document.activeElement as any).scrollIntoViewIfNeeded();
        } catch (e) { }
      }, 100);
    }
    if (this.props.onFocus) {
      this.props.onFocus(value);
    }
  }

  onInputBlur = (value) => {
    this.debounceTimeout = setTimeout(() => {
      this.setState({
        focus: false,
      });
    }, 200);
    if (this.props.onBlur) {
      this.props.onBlur(value);
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

    // note: remove `placeholderTextColor` prop for rn TextInput supports placeholderTextColor
    const otherProps = omit(this.props, ['prefixCls', 'prefixListCls', 'editable', 'style',
      'clear', 'children', 'error', 'className', 'extra', 'labelNumber', 'onExtraClick', 'onErrorClick',
      'updatePlaceholder', 'placeholderTextColor', 'type',
    ]);

    const { placeholder, focus } = this.state;
    const wrapCls = classNames({
      [`${prefixListCls}-item`]: true,
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-error`]: error,
      [`${prefixCls}-focus`]: focus,
      [`${prefixCls}-android`]: focus,
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

    const controlCls = classNames({
      [`${prefixCls}-control`]: true,
    });

    let inputType: any = 'text';
    if (type === 'bankCard' || type === 'phone') {
      inputType = 'tel';
    } else if (type === 'password') {
      inputType = 'password';
    } else if (type === 'digit') {
      inputType = 'number';
    } else if (type !== 'text' && type !== 'number') {
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

    let classNameProps;
    if (type === 'digit') {
      classNameProps = {
        className: 'h5numInput',
      };
    }

    return (
      <div className={wrapCls} style={style}>
        {children ? (<div className={labelCls}>{children}</div>) : null}
        <div className={controlCls}>
          <Input
            {...patternProps}
            {...otherProps}
            {...valueProps}
            {...classNameProps}
            type={inputType}
            maxLength={maxLength}
            name={name}
            placeholder={placeholder}
            onChange={this.onInputChange}
            onFocus={this.onInputFocus}
            onBlur={this.onInputBlur}
            readOnly={!editable}
            disabled={disabled}
          />
        </div>
        {clear && editable && !disabled && (value && value.length > 0) ?
          <div
            className={`${prefixCls}-clear`}
            onClick={this.clearInput}
          />
          : null}
        {error ? (<div className={`${prefixCls}-error-extra`} onClick={this.onErrorClick} />) : null}
        {extra !== '' ? <div className={`${prefixCls}-extra`} onClick={this.onExtraClick}>{extra}</div> : null}
      </div>
    );
  }
}

export default InputItem;
