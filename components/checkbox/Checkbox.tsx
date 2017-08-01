import React from 'react';
import { TouchableWithoutFeedback, Image, View, Text, StyleSheet } from 'react-native';
import { CheckboxProps } from './PropsType';
import CheckboxStyle, { ICheckboxStyle } from './style/index';

export interface ICheckboxNativeProps extends CheckboxProps {
  styles?: ICheckboxStyle;
}

const CheckboxStyles = StyleSheet.create<any>(CheckboxStyle);

export default class Checkbox extends React.Component<ICheckboxNativeProps, any> {
  static CheckboxItem: any;
  static AgreeItem: any;

  static defaultProps = {
    styles: CheckboxStyles,
  };

  constructor(props: CheckboxProps, context: any) {
    super(props, context);

    this.state = {
      checked: props.checked || props.defaultChecked || false,
    };
  }

  componentWillReceiveProps(nextProps: CheckboxProps): void {
    if (typeof nextProps.checked === 'boolean') {
      this.setState({
        checked: !!nextProps.checked,
      });
    }
  }

  handleClick = () => {
    if (this.props.disabled) {
      return;
    }
    const checked = !this.state.checked;
    if (!(typeof this.props.checked === 'boolean')) {
      this.setState({
        checked,
      });
    }
    if (this.props.onChange) {
      this.props.onChange({ target: { checked } });
    }
  }

  render(): JSX.Element {
    let { style, disabled, children, styles } = this.props;
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
        <View style={[styles!.wrapper]}>
          <Image source={imgSrc} style={[styles!.icon, style]} />
          {typeof children === 'string' ? ( <Text style={styles!.iconRight}>{this.props.children}</Text>) : children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
