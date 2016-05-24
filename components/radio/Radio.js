import React, { PropTypes } from 'react';
import RcCheckbox from 'rc-checkbox';
function noop() {}

export default class Radio extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-radio',
    name: '',
    checked: false,
    disabled: false,
    onChange: noop,
  };

  render() {
    return (<RcCheckbox
      {...this.props}
      type="radio"
    />);
  }
}
