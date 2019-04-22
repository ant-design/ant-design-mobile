import * as React from 'react';
import AbstractPicker, { getDefaultProps } from './AbstractPicker';
import * as PropTypes from 'prop-types';
import popupProps from './popupProps';

// TODO:
// fix error TS4026:Public static property 'defaultProps' of exported class has or is using name 'React.ReactElement'
// fix error TS6133: 'React' is declared but its value is never read.
export const nonsense = <div />;

export default class Picker extends AbstractPicker {
  static defaultProps = getDefaultProps();

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  protected popupProps = popupProps;
}
