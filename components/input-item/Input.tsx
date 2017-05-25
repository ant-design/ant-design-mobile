import React from 'react';
import { TextInput, TextInputProperties } from 'react-native';

export interface TextInputProps extends TextInputProperties {
  ref?: any; // overwrite for no error
  focused?: boolean;
}

class Input extends React.Component<TextInputProps, any> {
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
    if (this.props.autoFocus || this.props.focused) {
      (this.refs as any).input.focus();
    }
  }

  componentDidUpdate() {
    if (this.props.focused) {
      (this.refs as any).input.focus();
    }
  }

  render() {
    return (
      <TextInput
        ref="input"
        underlineColorAndroid="transparent"
        {...this.props}
      />
    );
  }
}

export default Input;
