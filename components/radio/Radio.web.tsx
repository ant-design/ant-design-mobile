import React from 'react';
import RcCheckbox from 'rc-checkbox';

import RadioProps from './RadioPropsType';

export default class Radio extends React.Component<RadioProps, any> {
  static RadioItem: any;

  static defaultProps = {
    prefixCls: 'am-radio',
  };

  render() {
    return (<RcCheckbox
      {...this.props}
      type="radio"
    />);
  }
}
