import React from 'react';
import { TextInput, TextInputProperties } from 'react-native';

export interface TextInputProps extends TextInputProperties {
  ref?: any; // overwrite for no error
  focused?: boolean;
}

class Input extends React.Component<TextInputProps, any> {
  input: any;

  constructor(props) {
    super(props);
    this.state = {
      focused: props.focused || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.focused !== this.state.focused) {
      this.setState({
        focused: nextProps.focused,
      });
    }
  }

  componentDidMount() {
    if (this.props.autoFocus || this.props.focused) {
      this.input.focus();
    }
  }

  componentDidUpdate() {
    if (this.props.focused) {
      this.input.focus();
    }
  }

  render() {
    return (
      <TextInput
        ref={el => this.input = el}
        underlineColorAndroid="transparent"
        {...this.props}
      />
    );
  }
}

export default Input;
