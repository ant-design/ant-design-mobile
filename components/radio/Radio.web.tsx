import * as React from 'react';
import RcCheckbox from 'rc-checkbox';

import RadioProps from './RadioPropsType';

export default class Radio extends React.Component<RadioProps, any> {
  static defaultProps = {
    prefixCls: 'am-radio',
    name: '',
    checked: false,
    disabled: false,
    onChange: () => {},
  };

  render() {
    return (<RcCheckbox
      {...this.props}
      type="radio"
    />);
  }
}
