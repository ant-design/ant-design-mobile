import { PropTypes } from 'react';
import * as React from 'react';
import { Image } from 'react-native';
import CheckboxStyle from './style/index';
const CheckboxItemStyle = CheckboxStyle.Checkbox;

export interface CheckboxItemProps {
  disabled?: boolean;
  checked?: boolean;
  onChange?: Function;
}

export default class CheckboxItem extends React.Component<CheckboxItemProps, any> {
  static propTypes = {
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    checked: false,
  };

  constructor(props) {
    super(props);
    this.state = {checked: props.checked};
  }

  componentWillReceiveProps(props) {
    if (this.props.checked !== props.checked && props.onChange) {
      props.onChange();
    }
  }

  render() {
    const size = (this.props.size || 'default');
    let uri = CheckboxItemStyle[size];
    let width = 20;
    let height = 20;
    switch (size) {
      case 'large':
        width = height = 24;
        break;
      default:
        break;
    }
    if (this.props.disabled) {
      uri = CheckboxItemStyle[size + 'Disabled'];
    } else if (this.props.checked) {
      uri = CheckboxItemStyle[size + 'Checked'];
    }
    return (<Image {...this.props} source={{uri: uri}} style={[{width: width, height: height}, this.props.style]} />);
  }
}
