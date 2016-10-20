import React from 'react';
import SwitchProps from './SwitchPropsType';
import { Switch } from 'react-native';

export default class AntmSwitch extends React.Component<SwitchProps, any> {
  static defaultProps = {
    name: '',
    checked: false,
    disabled: false,
    onChange() {},
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  }

  onChange(value) {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
    this.setState({
      checked: value,
    });
  };

  render() {
    let { style, disabled } = this.props;

    return (
      <Switch
        style={style}
        onValueChange={(value) => {this.onChange(value);}}
        value={this.state.checked}
        disabled={disabled}
      />
    );
  }
}
