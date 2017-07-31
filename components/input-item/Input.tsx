import React from 'react';
import omit from 'omit.js';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  focused?: boolean;
}

class Input extends React.Component<InputProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      focused: props.focused || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('focused' in nextProps) {
      this.setState({
        focused: nextProps.focused,
      });
    }
  }

  componentDidMount() {
    if ((this.props.autoFocus || this.state.focused) && navigator.userAgent.indexOf('AlipayClient') > 0) {
      (this.refs as any).input.focus();
    }
  }

  componentDidUpdate() {
    if (this.state.focused) {
      (this.refs as any).input.focus();
    }
  }

  onInputBlur = (e) => {
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

  onInputFocus = (e) => {
    if (!('focused' in this.props)) {
      this.setState({
        focused: true,
      });
    }

    const value = e.target.value;
    if (this.props.onFocus) {
      this.props.onFocus(value);
    }
  }

  render() {
    const otherProps = omit(this.props, ['onBlur', 'onFocus', 'focused', 'autoFocus']);
    return (
      <input ref="input" onBlur={this.onInputBlur} onFocus={this.onInputFocus} {...otherProps} />
    );
  }
}

export default Input;
