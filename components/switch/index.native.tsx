import React from 'react';
import { StyleProp, Switch, ViewStyle } from 'react-native';
import { SwitchPropsType } from './PropsType';
export interface AntmSwitchProps extends SwitchPropsType {
  style?: StyleProp<ViewStyle>;
}
const AntmSwitch = (props: AntmSwitchProps) => {
  const {
    style,
    onChange,
    checked = false,
    disabled = false,
    color = '#4dd865',
  } = props;
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
