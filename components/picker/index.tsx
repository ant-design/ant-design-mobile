import AbstractPicker, { getDefaultProps } from './AbstractPicker';
import './styles';

export default class Picker extends AbstractPicker {
  static defaultProps = { ...getDefaultProps() };

  protected popupProps = {};
}
