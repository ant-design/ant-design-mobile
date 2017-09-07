import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  focused?: boolean;
}

class Input extends React.Component<InputProps, any> {
  inputRef: any;

  onInputBlur = (e) => {
    const value = e.target.value;
    if (this.props.onBlur) {
      this.props.onBlur(value);
    }
  }

  onInputFocus = (e) => {
    const value = e.target.value;
    if (this.props.onFocus) {
      this.props.onFocus(value);
    }
  }

  focus = () => {
    this.inputRef.focus();
  }

  render() {
    const { onBlur, onFocus, ...restProps } = this.props;
    return (
      <input ref={el => this.inputRef = el} onBlur={this.onInputBlur} onFocus={this.onInputFocus} {...restProps} />
    );
  }
}

export default Input;
