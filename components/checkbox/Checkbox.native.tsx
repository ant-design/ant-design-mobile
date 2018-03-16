import React from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { CheckboxPropsType } from './PropsType';
import CheckboxStyle, { ICheckboxStyle } from './style/index.native';

export interface ICheckboxNativeProps extends CheckboxPropsType {
  styles?: ICheckboxStyle;
  style?: StyleProp<ImageStyle>;
}

const CheckboxStyles = StyleSheet.create<any>(CheckboxStyle);

export default class Checkbox extends React.Component<
  ICheckboxNativeProps,
  any
> {
  static CheckboxItem: any;
  static AgreeItem: any;

  static defaultProps = {
    styles: CheckboxStyles,
  };

  constructor(props: CheckboxPropsType, context: any) {
    super(props, context);

    this.state = {
      checked: props.checked || props.defaultChecked || false,
    };
  }

  componentWillReceiveProps(nextProps: CheckboxPropsType): void {
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
    const { style, disabled, children, styles } = this.props;
    const checked = this.state.checked;
    let imgSrc;
    if (checked) {
      imgSrc = disabled
        ? require('./image/checked_disable.png')
        : require('./image/checked.png');
    } else {
      imgSrc = disabled
        ? require('./image/normal_disable.png')
        : require('./image/normal.png');
    }

    return (
      <TouchableWithoutFeedback onPress={this.handleClick}>
        <View style={[styles!.wrapper]}>
          <Image source={imgSrc} style={[styles!.icon, style]} />
          {typeof children === 'string' ? (
          // tslint:disable-next-line:jsx-no-multiline-js
            <Text style={styles!.iconRight}>{this.props.children}</Text>
          ) : (
            children
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
