import React from 'react';
import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import Checkbox from './Checkbox.native';
import { CheckboxPropsType } from './PropsType';
import AgreeItemstyle, { ICheckboxStyle } from './style/index.native';

const refCheckbox = 'checkbox';

export interface AgreeItemNativeProps extends CheckboxPropsType {
  styles?: ICheckboxStyle;
  checkboxStyle?: StyleProp<ImageStyle>;
  style?: StyleProp<ViewStyle>;
}

const AgreeItemstyles = StyleSheet.create<any>(AgreeItemstyle);

export default class AgreeItem extends React.Component<
  AgreeItemNativeProps,
  any
> {
  static defaultProps = {
    styles: AgreeItemstyles,
  };

  handleClick = () => {
    const checkBox: Checkbox = this.refs[refCheckbox] as Checkbox;
    checkBox.handleClick();
  }

  render(): JSX.Element {
    // tslint:disable:prefer-const
    let {
      style,
      checkboxStyle,
      children,
      disabled,
      checked,
      defaultChecked,
      onChange,
      styles,
    } = this.props;
    styles = styles!;

    let contentDom = !children ? null : React.isValidElement(children) ? (
      children
    ) : (
      <Text>{children}</Text>
    );

    return (
      <TouchableWithoutFeedback onPress={this.handleClick}>
        <View style={[styles.agreeItem, style]}>
          <Checkbox
            ref={refCheckbox}
            style={[styles.agreeItemCheckbox, checkboxStyle]}
            disabled={disabled}
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={onChange}
          />
          <View style={{ flex: 1 }}>{contentDom}</View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
