/* tslint:disable:jsx-no-multiline-js */
import classnames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
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
  autoAdjustHeight?: boolean;
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
    onVirtualKeyboardConfirm: noop,
    labelNumber: 5,
    updatePlaceholder: false,
    moneyKeyboardAlign: 'right',
    moneyKeyboardWrapProps: {},
    moneyKeyboardHeader: null,
    disabledKeys: null,
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
      window.clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = e.target;
    const { value: rawVal } = el;

    let prePos = 0;
    try {
      // some input type do not support selection, see https://html.spec.whatwg.org/multipage/input.html#do-not-apply
      prePos = el.selectionEnd || 0;
    } catch (error) {
      console.warn('Get selection error:', error);
    }

    const { value: preCtrlVal = '' } = this.state;
    const { type } = this.props;

    let ctrlValue = rawVal;
    switch (type) {
      case 'bankCard':
        ctrlValue = rawVal.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
        break;
      case 'phone':
        ctrlValue = rawVal.replace(/\D/g, '').substring(0, 11);
        const valueLen = ctrlValue.length;
        if (valueLen > 3 && valueLen < 8) {
          ctrlValue = `${ctrlValue.substr(0, 3)} ${ctrlValue.substr(3)}`;
        } else if (valueLen >= 8) {
          ctrlValue = `${ctrlValue.substr(0, 3)} ${ctrlValue.substr(3, 4)} ${ctrlValue.substr(
            7,
          )}`;
        }
        break;
      case 'number':
        ctrlValue = rawVal.replace(/\D/g, '');
        break;
      case 'text':
      case 'password':
      default:
        break;
    }

    this.handleOnChange(ctrlValue, ctrlValue !== rawVal, () => {
      switch (type) {
        case 'bankCard':
        case 'phone':
        case 'number':
          // controlled input type needs to adjust the position of the caret
          try {
            // some input type do not support selection, see https://html.spec.whatwg.org/multipage/input.html#do-not-apply
            let pos = this.calcPos(prePos, preCtrlVal, rawVal, ctrlValue, [' '], /\D/g);
            if ((type === 'phone' && (pos === 4 || pos === 9)) || (type === 'bankCard' && (pos > 0 && pos % 5 === 0))) {
              pos -= 1;
            }
            el.selectionStart = el.selectionEnd = pos;
          } catch (error) {
            console.warn('Set selection error:', error);
          }
          break;
        default:
          break;
      }
    });
  }

  handleOnChange = (value: string, isMutated: boolean = false, adjustPos: Function = noop) => {
    const { onChange } = this.props;

    if (!('value' in this.props)) {
      this.setState({ value });
    } else {
      this.setState({ value: this.props.value });
    }
    if (onChange) {
      if (isMutated) {
        setTimeout(() => {
          onChange(value);
          adjustPos();
        });
      } else {
        onChange(value);
        adjustPos();
      }
    } else {
      adjustPos();
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
      this.debounceTimeout = window.setTimeout(() => {
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
      // fix autoFocus item blur with flash
      setTimeout(() => {
        // fix ios12 wechat browser click failure after input
        if (document.body) {
          document.body.scrollTop = document.body.scrollTop;
        }
      },100);
      this.props.onBlur(value);
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

  // this is instance method for user to use
  focus = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  // calculate the position of the caret
  calcPos = (prePos: number, preCtrlVal: string, rawVal: string, ctrlVal: string, placeholderChars: Array<string>, maskReg: RegExp) => {
    const editLength = rawVal.length - preCtrlVal.length;
    const isAddition = editLength > 0;
    let pos = prePos;
    if (isAddition) {
      const additionStr = rawVal.substr(pos - editLength, editLength);
      let ctrlCharCount = additionStr.replace(maskReg, '').length;
      pos -= (editLength - ctrlCharCount);
      let placeholderCharCount = 0;
      while (ctrlCharCount > 0) {
        if (placeholderChars.indexOf(ctrlVal.charAt(pos - ctrlCharCount + placeholderCharCount)) === -1) {
          ctrlCharCount--;
        } else {
          placeholderCharCount++;
        }
      }
      pos += placeholderCharCount;
    }
    return pos
  }

  render() {
    const props = { ...this.props };
    delete props.updatePlaceholder;

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
      type,
      onExtraClick,
      onErrorClick,
      moneyKeyboardAlign,
      moneyKeyboardWrapProps,
      moneyKeyboardHeader,
      onVirtualKeyboardConfirm,
      autoAdjustHeight,
      disabledKeys,
      ...restProps
    } = props;
    const { name, disabled, maxLength } = restProps;
    const { value } = this.state;

    // tslint:disable-next-line:variable-name
    const _locale = getComponentLocale(
      this.props,
      this.context,
      'InputItem',
      () => require('./locale/zh_CN'),
    );

    const {
      confirmLabel,
      backspaceLabel,
      cancelKeyboardLabel,
    } = _locale;

    const {
      focus,
      placeholder,
    } = this.state;

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
                onVirtualKeyboardConfirm={onVirtualKeyboardConfirm}
                disabled={disabled}
                editable={editable}
                prefixCls={prefixCls}
                style={style}
                confirmLabel={confirmLabel}
                backspaceLabel={backspaceLabel}
                cancelKeyboardLabel={cancelKeyboardLabel}
                moneyKeyboardAlign={moneyKeyboardAlign}
                moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                moneyKeyboardHeader={moneyKeyboardHeader}
                autoAdjustHeight={autoAdjustHeight}
                disabledKeys={disabledKeys}
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
              onClick={onErrorClick}
            />
          ) : null}
          {extra !== '' ? (
            <div className={`${prefixCls}-extra`} onClick={onExtraClick}>
              {extra}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default InputItem;
