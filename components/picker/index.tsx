import AbstractPicker, { getDefaultProps } from './AbstractPicker';
import pickerStyles, { IPickerStyle } from './style';
import tsPropsType from './PropsType';

export interface IPickerNativeProps extends tsPropsType {
  styles?: IPickerStyle;
}

export default class Picker extends AbstractPicker {
  static defaultProps = {
    ...getDefaultProps(),
    styles: pickerStyles,
  };

  protected popupProps = {};
}
