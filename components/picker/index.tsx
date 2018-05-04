import AbstractPicker, { getDefaultProps } from './AbstractPicker';
import PropTypes from 'prop-types';
import popupProps from './popupProps';

export default class Picker extends AbstractPicker {
  static defaultProps = getDefaultProps();

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  protected popupProps = popupProps;
}
