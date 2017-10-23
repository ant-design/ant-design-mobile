import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import AbstractPicker, { getDefaultProps } from './AbstractPicker';
import pickerStyle, { IPickerStyle } from './style/index.native';
import tsPropsType from './PropsType';

export interface IPickerNativeProps extends tsPropsType {
  styles?: IPickerStyle;
}

const pickerStyles = StyleSheet.create<any>(pickerStyle);

export default class Picker extends AbstractPicker {
  static defaultProps = {
    ...getDefaultProps(),
    styles: pickerStyles,
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  protected popupProps = {};
}
