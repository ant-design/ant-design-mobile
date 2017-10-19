import React from 'react';
import SwitchProps from './PropsType';
import { Switch } from 'react-native';

const AntmSwitch = (props: SwitchProps) => {
  const { style, onChange, checked = false, disabled = false, color = '#4dd865' } = props;
  return (
    <Switch
      style={style}
      onValueChange={onChange}
      value={checked}
      disabled={disabled}
      onTintColor={color}
    />
  );
};

export default AntmSwitch;
