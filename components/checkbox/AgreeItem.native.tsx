import React from 'react';
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';
import Checkbox from './Checkbox.native';
import { AgreeItemPropsType } from './PropsType';
import AgreeItemstyle, { ICheckboxStyle } from './style/index.native';

const refCheckbox = 'checkbox';

export interface IAgreeItemNativeProps extends AgreeItemPropsType {
  styles?: ICheckboxStyle;
}

const AgreeItemstyles = StyleSheet.create<any>(AgreeItemstyle);

export default class AgreeItem extends React.Component<IAgreeItemNativeProps, any> {
  static defaultProps = {
    styles: AgreeItemstyles,
  };

  handleClick = () => {
    let checkBox: Checkbox = this.refs[refCheckbox] as Checkbox;
    checkBox.handleClick();
  }

  render(): JSX.Element {
    let { style, checkboxStyle, children, disabled, checked, defaultChecked, onChange, styles } = this.props;
    styles = styles!;

    let contentDom;
    if (React.isValidElement(children)) {
      contentDom = children;
    } else {
      contentDom = <Text>{children}</Text>;
    }

    return (<TouchableWithoutFeedback onPress={this.handleClick}>
      <View style={[styles.agreeItem, style]}>
        <Checkbox
          ref={refCheckbox}
          style={[styles.agreeItemCheckbox, checkboxStyle]}
          disabled={disabled}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
        <View style={{ flex: 1 }}>
          {contentDom}
        </View>
      </View>
    </TouchableWithoutFeedback>);
  }
}
