import React from 'react';
import {TouchableWithoutFeedback, Image, View, Text} from 'react-native';
import { CheckboxProps } from './PropsType';
import styles from './style/index';

export default class Checkbox extends React.Component<CheckboxProps, any> {
  static CheckboxItem: any;
  static AgreeItem: any;

  constructor(props: CheckboxProps, context: any) {
    super(props, context);

    this.state = {
      checked: props.checked || props.defaultChecked || false,
    };
  }

  componentWillReceiveProps(nextProps: CheckboxProps): void {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked,
      });
    }
  }

  toggle() {
    const checked = !this.state.checked;
    if (!('checked' in this.props)) {
      this.setState({
        checked,
      });
    }
    if (this.props.onChange) {
      this.props.onChange({target: { checked }});
    }
  }

  handleClick = () => {
    if (this.props.disabled) {
      return;
    }
    this.toggle();
  };

  render(): JSX.Element {
    let {style, disabled, children} = this.props;
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

    return (
      <TouchableWithoutFeedback onPress={this.handleClick}>
        <View style={[styles.wrapper]}>
          <Image source={imgSrc} style={[styles.icon, style]} />
          {
            typeof children === 'string' ? (
              <Text style={styles.iconRight}>{this.props.children}</Text>
            ) : children
          }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
