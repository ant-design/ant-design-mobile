import AbstractPicker, { getDefaultProps } from './AbstractPicker';
import popupProps from './popupProps.web';

export default class Picker extends AbstractPicker {
  static defaultProps = getDefaultProps();

  protected popupProps = popupProps;
}
