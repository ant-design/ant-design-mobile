import React from 'react';
import {TouchableWithoutFeedback, Image} from 'react-native';
import CheckboxProps from './CheckboxPropsType';
import styles from './style/index';

export default class Checkbox extends React.Component<CheckboxProps, any> {
  static CheckboxItem: any;
  static AgreeItem: any;

  constructor(props: CheckboxProps, context: any) {
    super(props, context);

    let checked;
    if (props.checked !== null && props.checked !== undefined) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    this.state = {
      checked: checked,
    };
  }

  componentWillReceiveProps(nextProps: CheckboxProps): void {
    if (nextProps.checked !== null && nextProps.checked !== undefined) {
      const oldChecked = this.state.checked;
      if (nextProps.checked === oldChecked) {
        return;
      }
      this.setState({
        checked: !!nextProps.checked,
      });
    }
  }

  toggle() {
    let checked = !this.state.checked;

    if (this.props.checked === null || this.props.checked === undefined) {
      this.setState({
        checked: checked,
      });
    }

    if (this.props.onChange) {
      this.props.onChange(checked);
    }
  }

  handleClick = () => {
    if (this.props.disabled) {
      return;
    }
    this.toggle();
  };

  render(): JSX.Element {
    let {style, disabled} = this.props;
    let checked = this.state.checked;
    let imgSrc;
    if (checked) {
      if (disabled) {
        imgSrc = require('./image/checked_disable.png');
      } else {
        imgSrc = require('./image/checked.png');
      }
    } else {
      if (disabled) {
        imgSrc = require('./image/normal_disable.png');
      } else {
        imgSrc = require('./image/normal.png');
      }
    }

    return (<TouchableWithoutFeedback onPress={this.handleClick}>
      <Image
        source={imgSrc}
        style={[styles.icon, style]}
      />
    </TouchableWithoutFeedback>);
  }
}
