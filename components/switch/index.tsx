import React from 'react';
import { PropTypes } from 'react';
import SwitchProps from './SwitchPropsType';
import { Switch } from 'react-native';

export default class AntmSwitch extends React.Component<SwitchProps, any> {
  static propTypes = {
    style: PropTypes.object,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    name: '',
    checked: false,
    disabled: false,
    onChange() {},
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  }

  onChange(value) {
    this.props.onChange(value);
    this.setState({
      checked: value,
    });
  };

  render() {
    let { style, disabled } = this.props;

    return (
      <Switch
        style={style}
        onValueChange={(value) => {this.onChange(value);}}
        value={this.state.checked}
        disabled={disabled}
      />
    );
  }
}
