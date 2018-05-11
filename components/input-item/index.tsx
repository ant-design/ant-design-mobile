/* tslint:disable:jsx-no-multiline-js */
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import TouchFeedback from 'rmc-feedback';
import { getComponentLocale } from '../_util/getLocale';
import CustomInput from './CustomInput';
import Input from './Input';
import { InputItemPropsType } from './PropsType';
import { Omit } from '../_util/types';

export type HTMLInputProps = Omit<
  React.HTMLProps<HTMLInputElement>,
  'onChange' | 'onFocus' | 'onBlur' | 'value' | 'defaultValue' | 'type'
>;

export interface InputItemProps extends InputItemPropsType, HTMLInputProps {
  prefixCls?: string;
  prefixListCls?: string;
  className?: string;
  onErrorClick?: React.MouseEventHandler<HTMLDivElement>;
  onExtraClick?: React.MouseEventHandler<HTMLDivElement>;
}

function noop() {}

function normalizeValue(value?: string) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value + '';
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
    moneyKeyboardAlign: 'right',
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  inputRef: Input | CustomInput | null;
  private debounceTimeout: number | null;

  constructor(props: InputItemProps) {
    super(props);
    this.state = {
      placeholder: props.placeholder,
      value: normalizeValue(props.value || props.defaultValue),
    };
  }

  componentWillReceiveProps(nextProps: InputItemProps) {
    if ('placeholder' in nextProps && !nextProps.updatePlaceholder) {
      this.setState({
        placeholder: nextProps.placeholder,
      });
    }
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  componentWillUnmount() {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { type } = this.props;

    let newValue = value;
    switch (type) {
      case 'bankCard':
        newValue = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
        break;
      case 'phone':
        newValue = value.replace(/\D/g, '').substring(0, 11);
        const valueLen = newValue.length;
        if (valueLen > 3 && valueLen < 8) {
          newValue = `${newValue.substr(0, 3)} ${newValue.substr(3)}`;
        } else if (valueLen >= 8) {
          newValue = `${newValue.substr(0, 3)} ${newValue.substr(3, 4)} ${newValue.substr(
            7,
          )}`;
        }
        break;
      case 'number':
        newValue = value.replace(/\D/g, '');
        break;
      case 'text':
      case 'password':
      default:
        break;
    }
    this.handleOnChange(newValue, newValue !== value);
  }

  handleOnChange = (value: string, isMutated: boolean = false) => {
    const { onChange } = this.props;

    if (!('value' in this.props)) {
      this.setState({ value });
    } else {
      this.setState({ value: this.props.value });
    }
    if (onChange) {
      isMutated ? setTimeout(() => onChange(value)) : onChange(value);
    }
  }
  onInputFocus = (value: string) => {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
    this.setState({
      focus: true,
    });
    if (this.props.onFocus) {
      this.props.onFocus(value);
    }
  }

  onInputBlur = (value: string) => {
    if (this.inputRef) {
      // this.inputRef may be null if customKeyboard unmount
      this.debounceTimeout = setTimeout(() => {
        if (
          document.activeElement !== (this.inputRef && this.inputRef.inputRef)
        ) {
          this.setState({
            focus: false,
          });
        }
      }, 200);
    }
    if (this.props.onBlur) {
      this.props.onBlur(value);
    }
  }

  onExtraClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (this.props.onExtraClick) {
      this.props.onExtraClick(e);
    }
  }

  onErrorClick = (e: React.MouseEvent<HTMLDivElement>) => {
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
    this.setState({
      value: '',
    });
    if (this.props.onChange) {
      this.props.onChange('');
    }
    this.focus();
  }

  focus = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }
  render() {
    const {
      prefixCls,
      prefixListCls,
      editable,
      style,
      clear,
      children,
      error,
      className,
      extra,
      labelNumber,
      onExtraClick,
      onErrorClick,
      updatePlaceholder,
      type,
      locale,
      moneyKeyboardAlign,
      ...restProps,
    } = this.props;
    const { name, disabled, maxLength } = restProps;
    const { value } = this.state;

    // tslint:disable-next-line:variable-name
    const _locale = getComponentLocale(
      this.props,
      this.context,
      'InputItem',
      () => require('./locale/zh_CN'),
    );

    const { confirmLabel } = _locale;

    const { placeholder, focus } = this.state;

    const wrapCls = classnames(
      `${prefixListCls}-item`,
      `${prefixCls}-item`,
      `${prefixListCls}-item-middle`,
      className,
      {
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-error`]: error,
        [`${prefixCls}-focus`]: focus,
        [`${prefixCls}-android`]: focus,
      },
    );

    const labelCls = classnames(`${prefixCls}-label`, {
      [`${prefixCls}-label-2`]: labelNumber === 2,
      [`${prefixCls}-label-3`]: labelNumber === 3,
      [`${prefixCls}-label-4`]: labelNumber === 4,
      [`${prefixCls}-label-5`]: labelNumber === 5,
      [`${prefixCls}-label-6`]: labelNumber === 6,
      [`${prefixCls}-label-7`]: labelNumber === 7,
    });

    const controlCls = `${prefixCls}-control`;

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

    let patternProps;
    if (type === 'number') {
      patternProps = {
        pattern: '[0-9]*',
      };
    }

    let classNameProps;
    if (type === 'digit') {
      classNameProps = {
        className: 'h5numInput', // the name is bad! todos rename.
      };
    }

    return (
      <div className={wrapCls}>
        <div className={`${prefixListCls}-line`}>
          {children ? <div className={labelCls}>{children}</div> : null}
          <div className={controlCls}>
            {type === 'money' ? (
              <CustomInput
                value={normalizeValue(value)}
                type={type}
                ref={el => (this.inputRef = el)}
                maxLength={maxLength}
                placeholder={placeholder}
                onChange={this.onInputChange}
                onFocus={this.onInputFocus}
                onBlur={this.onInputBlur}
                disabled={disabled}
                editable={editable}
                prefixCls={prefixCls}
                style={style}
                confirmLabel={confirmLabel}
                moneyKeyboardAlign={moneyKeyboardAlign}
              />
            ) : (
              <Input
                {...patternProps}
                {...restProps}
                {...classNameProps}
                value={normalizeValue(value)}
                defaultValue={undefined}
                ref={(el: any) => (this.inputRef = el)}
                style={style}
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
            )}
          </div>
          {clear &&
          editable &&
          !disabled &&
          (value && `${value}`.length > 0) ? (
            <TouchFeedback activeClassName={`${prefixCls}-clear-active`}>
              <div className={`${prefixCls}-clear`} onClick={this.clearInput} />
            </TouchFeedback>
          ) : null}
          {error ? (
            <div
              className={`${prefixCls}-error-extra`}
              onClick={this.onErrorClick}
            />
          ) : null}
          {extra !== '' ? (
            <div className={`${prefixCls}-extra`} onClick={this.onExtraClick}>
              {extra}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default InputItem;
