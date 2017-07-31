import React from 'react';
import SwitchProps from './PropsType';
import { Switch } from 'react-native';

export default class AntmSwitch extends React.Component<SwitchProps, any> {
  static defaultProps = {
    name: '',
    checked: false,
    disabled: false,
    onChange() {},
    color: '#4dd865',
  };

  onChange(value) {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render() {
    let { style, disabled, color, checked } = this.props;

    return (
      <Switch
        style={style}
        onValueChange={(value) => {this.onChange(value); }}
        value={checked}
        disabled={disabled}
        onTintColor={color}
      />
    );
  }
}
