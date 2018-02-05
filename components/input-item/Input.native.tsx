import React from 'react';
import { TextInput, TextInputProperties } from 'react-native';

export interface TextInputProps extends TextInputProperties {
  focused?: boolean;
}

class Input extends React.Component<TextInputProps, any> {
  inputRef: TextInput | null;

  constructor(props: TextInputProps) {
    super(props);
    this.state = {
      focused: props.focused || false,
    };
  }

  componentWillReceiveProps(nextProps: TextInputProps) {
    if (nextProps.focused !== this.state.focused) {
      this.setState({
        focused: nextProps.focused,
      });
    }
  }

  componentDidMount() {
    if (this.inputRef && (this.props.autoFocus || this.props.focused)) {
      this.inputRef.focus();
    }
  }

  componentDidUpdate() {
    if (this.inputRef && this.props.focused) {
      this.inputRef.focus();
    }
  }

  render() {
    return (
      <TextInput
        ref={el => ((this.inputRef as any) = el)}
        underlineColorAndroid="transparent"
        {...this.props}
      />
    );
  }
}

export default Input;
